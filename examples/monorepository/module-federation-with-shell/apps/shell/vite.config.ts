import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    port: 1234,
  },
  base: "/",
  plugins: [
    federation({
      name: "shell",
      remotes: {
        blog: {
          type: "module",
          name: "blog",
          entry: "http://localhost:4000/blog.js",
          entryGlobalName: "remote-blog",
        },
        homepage: {
          type: "module",
          name: "homepage",
          entry: "http://localhost:3000/homepage.js",
          entryGlobalName: "remote-homepage",
        },
        banner: {
          type: "module",
          name: "banner",
          entry: "http://localhost:2000/banner.js",
          entryGlobalName: "remote-banner",
        },
        "web-vitals-reporter": {
          type: "module",
          name: "web-vitals-reporter",
          entry: "http://localhost:2001/web-vitals-reporter.js",
          entryGlobalName: "remote-web-vitals-reporter",
        },
      },
    }),
  ],
});
