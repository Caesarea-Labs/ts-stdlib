import {defineConfig} from "tsup";

export default defineConfig({
    entry: ['index.ts'],
    format: ["esm", "cjs"],
    sourcemap: true,
    clean: true
})
