import path from "path";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@/src": path.resolve(__dirname, "./src"),
      "@/images": path.resolve(__dirname, "./public/images"),
    },
  },
});
