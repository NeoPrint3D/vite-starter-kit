import { defineConfig, Manifest } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import { readFileSync } from "fs";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pwa({
      strategies: "injectManifest",
      srcDir: "",
      filename: "./public/pwa/service-worker.js",
      manifest: JSON.parse(readFileSync("./public/pwa/manifest.json", "utf-8"))
    }),
  ],
});
