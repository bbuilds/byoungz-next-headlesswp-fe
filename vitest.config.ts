import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "load-svg",
      enforce: "pre",
      transform(_, id) {
        if (id.endsWith(".svg")) {
          return "export default () => {}";
        }
      },
    },
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [path.resolve(__dirname, "./src/lib/vitetest-setup.ts")],
  },

  resolve: {
    alias: {
      "@/src": path.resolve(__dirname, "./src"),
      "@/images": path.resolve(__dirname, "./public/images"),
    },
  },
});
