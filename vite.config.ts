import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemapPlugin from "vite-plugin-sitemap";

export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemapPlugin({
      hostname: "https://www.mr-clear.com",
      dynamicRoutes: [
        "/",
        "/soumission",
        "/confidentialite",
        "/secteurs/laval",
        "/secteurs/montreal",
        "/secteurs/terrebonne",
        "/secteurs/repentigny",
        "/secteurs/mascouche",
        "/secteurs/assomption",
        "/secteurs/boisbriand",
        "/secteurs/lorraine",
        "/secteurs/rosemere",
        "/secteurs/bois-des-filion"
      ],
      changefreq: "monthly",
      priority: 0.7,
      readable: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
