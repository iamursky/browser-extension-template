import { crx } from "@crxjs/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import { defineConfig } from "vite";
import zip from "vite-plugin-zip-pack";

import manifest from "./manifest.config";

export default defineConfig({
  plugins: [
    tailwindcss(),
    crx({ manifest }),
    zip({
      outDir: "dist",
      outFileName: "release.zip",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "src"),
    },
  },
  server: {
    cors: {
      origin: [/chrome-extension:\/\//],
    },
  },
});
