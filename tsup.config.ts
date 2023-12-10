import {defineConfig} from "tsup";
export default defineConfig({
    entry: ['index.ts'],
    sourcemap: true,
    clean: true,
    loader: {
        '.css': 'css',
    },
})
