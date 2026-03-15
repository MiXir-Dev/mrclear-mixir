import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemapPlugin from "vite-plugin-sitemap";

const resolvedPort = Number(process.env.VITE_PORT ?? "8080");
const devPort = Number.isFinite(resolvedPort) ? resolvedPort : 8080;

export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  server: {
    host: "::",
    port: devPort,
  },
  plugins: [
    react(),
    sitemapPlugin({
      hostname: "https://mrclear.ca",
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
