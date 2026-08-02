import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        shop: resolve(__dirname, "pages/shop.html"),
        about: resolve(__dirname, "pages/about.html"),
        contact: resolve(__dirname, "pages/contact.html")
      }
    }
  }
});
