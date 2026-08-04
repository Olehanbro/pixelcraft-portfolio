import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "pages/services.html"),
        about: resolve(__dirname, "pages/about.html"),
        pricing: resolve(__dirname, "pages/pricing.html"),
        blog: resolve(__dirname, "pages/blog.html"),
        contact: resolve(__dirname, "pages/contact.html")
      }
    }
  }
});
