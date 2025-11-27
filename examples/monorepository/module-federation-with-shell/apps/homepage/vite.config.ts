import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    origin: "http://localhost:3000",
    port: 3000,
  },
  base: "http://localhost:3000",
  plugins: [
    federation({
      name: "homepage",
      filename: "homepage.js",
      exposes: {
        ".": "./src/main.ts",
      },
    }),
  ],
});
