import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const path = require("path");

export default defineConfig({
    // ...
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        target: 'es2015',
    },
    server: {
        port: 3000,
    },
    plugins: [vue()],
});
