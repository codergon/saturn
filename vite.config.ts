import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  server: {
    port: 3000,
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/scss/utils/fonts.scss";
          @import "./src/scss/utils/mixins.scss";
        `,
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".glsl": "text",
        ".frag": "text",
      },
    },
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, "./src/utils"),
      pages: path.resolve(__dirname, "./src/pages"),
    },
  },
});
