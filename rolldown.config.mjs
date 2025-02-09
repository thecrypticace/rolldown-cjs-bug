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
]);
