const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__a63df0._.js");
runtime.loadChunk("server/chunks/ssr/src_styles_globals_070f83.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
