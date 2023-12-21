import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

let ctx = await esbuild.context({
  entryPoints: ["./src/index.tsx"],
  outfile: "dist/index.js",
  bundle: true,
  treeShaking: true,
  jsx: "automatic",
  platform: "node",
  format: "esm",
  target: "node18",
  plugins: [nodeExternalsPlugin()],
});

await ctx.watch();
