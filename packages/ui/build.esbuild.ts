import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";
esbuild
  .build({
    entryPoints: ["./src/index.tsx"],
    outfile: "dist/index.js",
    bundle: true,
    minify: true,
    treeShaking: true,
    jsx: "automatic",
    platform: "node",
    format: "esm",
    target: "node18",
    plugins: [nodeExternalsPlugin()],
  })
  .catch(() => process.exit(1));
