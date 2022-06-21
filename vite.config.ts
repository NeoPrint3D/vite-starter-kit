import { defineConfig, Manifest } from "vite";
import { VitePWA as pwa } from "vite-plugin-pwa";
import { readFileSync } from "fs";
import react from "@vitejs/plugin-react";

const manifest = JSON.parse(readFileSync("./manifest.json", "utf-8"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pwa({
      strategies: "injectManifest",
      srcDir: "",
      filename: "service-worker.js",
      manifest,
    }),
  ],
});
