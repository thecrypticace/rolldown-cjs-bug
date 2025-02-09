import { defineConfig } from "rolldown";

export default defineConfig([
  {
    platform: "node",
    input: "examples/minimal/index.mjs",
    output: { file: "dist/minimal.mjs" },
  },
  {
    platform: "node",
    input: "examples/tailwind/index.mjs",
    output: { file: "dist/tailwind.mjs" },
  },
  // Uncomment this block and run `rolldown` to see an `illegal hardware instruction` error
  // {
  //   platform: "node",
  //   input: "examples/invalid-instruction-error/index.mjs",
  //   output: { file: "dist/invalid-instruction-error.mjs" },
  // },
]);
