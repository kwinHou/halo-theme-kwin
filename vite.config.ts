import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import inject from '@rollup/plugin-inject';

import path from "path";

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  root: 'src',
  base: '/themes/halo-theme-kwin/assets/',
  build: {
    outDir: fileURLToPath(new URL("./templates/assets/", import.meta.url)),
    emptyOutDir: true,
    minify: isProd,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.js'),
      output: {
        entryFileNames: 'dist/[name].js',
        assetFileNames: 'dist/[name][extname]',
        chunkFileNames: 'dist/[name].js',
        manualChunks(id) {
          if (id.includes("node_modules")) {
            let name = id.split("node_modules/")[1].split("/");
            if (name[0] == ".pnpm") {
              return "depend/" + name[1];
            } else {
              return "depend/" + name[0];
            }
          }
        }
      },
    },
    sourcemap: false
  },
  plugins: [
    inject({
      $: 'jquery',
      jquery: 'jquery',
      bootstrap: ['bootstrap', '*']
    })
  ],
  optimizeDeps: {
    include: ['jquery', 'bootstrap']
  }
});
