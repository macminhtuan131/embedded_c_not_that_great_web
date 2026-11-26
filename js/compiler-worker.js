importScripts("../vendor/clang/shared.js");

async function loadAsset(name) {
  const response = await fetch(new URL("../vendor/clang/" + name + ".gz", self.location));
  if (!response.ok || !response.body) {
    throw new Error("Không tải được tệp trình biên dịch " + name + ".");
  }
  return new Response(response.body.pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();
}

const LIMIT = 24_000;
let compiler;
let capture = false;
let output = "";
let sequence = 0;

function boot() {
  const api = new API({
    readBuffer: loadAsset,
    compileStreaming: async name => WebAssembly.compile(await loadAsset(name)),
    hostWrite: text => {
      if (capture) {
        output += text;
        if (output.length > LIMIT) throw new Error("Chương trình đã ghi quá nhiều dữ liệu.");
      }
    }
  });
  api.hostLog = () => {};
  api.hostLogAsync = (_label, promise) => promise;
  api.clangCommonArgs = api.clangCommonArgs.filter(arg => arg !== "-fcolor-diagnostics" && arg !== "-disable-free");
  return api;
}

function clean(text) {
  return text.replace(/\x1b\[[0-9;]*m/g, "").trim();
}

function toBytes(text) {
  return Array.from(new TextEncoder().encode(text), byte => String.fromCharCode(byte)).join("");
}

function fromBytes(text) {
  return new TextDecoder().decode(Uint8Array.from(text, char => char.charCodeAt(0)));
}

async function runStage(callback) {
  output = "";
  capture = true;
  try {
    await callback();
    return {output};
  } catch (error) {
    return {output, error};
  } finally {
    capture = false;
  }
}

function diagnosis(stage, file, label) {
  return clean(fromBytes(stage.output)).replaceAll(file,label)
    .replace(/\nError: process exited with code \d+\.?$/,"") ||
    stage.error?.message || "";
}

function runtimeError(error) {
  if (typeof error.code === "number") return "Chương trình kết thúc với mã " + error.code + ".";
  if (error instanceof WebAssembly.RuntimeError) {
    return "Chương trình gặp lỗi khi chạy. Kiểm tra chỉ số, con trỏ hoặc phép chia. Chi tiết: " + error.message;
  }
  return error.message;
}

self.onmessage = async ({data}) => {
  try {
    if (!compiler) compiler = boot();
    const [clang] = await Promise.all([compiler.getModule("clang"), compiler.getModule("lld"), compiler.ready]);
    const file = "bai_" + (++sequence);
    const sourceFile = file + ".c";
    const objectFile = file + ".o";
    const wasmFile = file + ".wasm";
    const source = new TextEncoder().encode(data.code);
    if (source.byteLength > 65_536) throw new Error("Tệp mã cần nhỏ hơn 64 KiB.");
    compiler.memfs.addFile(sourceFile, source);
    const compilation = await runStage(() => compiler.run(clang, "clang", "-cc1", "-emit-obj",
      ...compiler.clangCommonArgs, "-std=c17", "-O0", "-Wall", "-Wextra", "-o", objectFile, "-x", "c", sourceFile));
    const diagnostics = diagnosis(compilation,sourceFile,"main.c");
    if (compilation.error) {
      self.postMessage({kind:"compile", diagnostics});
      return;
    }
    const link = await runStage(() => compiler.link(objectFile, wasmFile));
    if (link.error) {
      self.postMessage({kind:"compile", diagnostics:diagnosis(link,objectFile,"main.o")});
      return;
    }
    const program = await WebAssembly.compile(compiler.memfs.getFileContents(wasmFile));
    self.postMessage({kind:"running"});
    const results = [];
    for (const input of data.inputs) {
      compiler.memfs.setStdinStr(toBytes(input ? input + "\n" : ""));
      const run = await runStage(() => compiler.run(program, wasmFile));
      results.push(run.error ? {error:runtimeError(run.error)} : {stdout:clean(fromBytes(run.output))});
    }
    self.postMessage({kind:"result", diagnostics, results});
  } catch (error) {
    self.postMessage({kind:"error", message:error.message});
    compiler = undefined;
  }
};

