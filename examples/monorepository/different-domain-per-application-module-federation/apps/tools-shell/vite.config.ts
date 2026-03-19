import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    origin: "http://localhost:2002",
    port: 2002,
  },
  base: "http://localhost:2002",
  plugins: [
    federation({
      name: "tools-shell",
      filename: "tools-shell.js",
      exposes: {
        ".": "./src/main.ts",
      },
    }),
  ],
});
