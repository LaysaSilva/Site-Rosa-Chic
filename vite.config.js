import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/Site-Rosa-Chic",
  plugins: [],
  resolve: {

  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        checkout: resolve(__dirname, "./checkout.html"),
        pedidos: resolve(__dirname, "./pedidos.html"),
      },
    },
  },
});