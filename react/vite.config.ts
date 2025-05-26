/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      biome: {
        command: "check",
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    sourcemap: true,
  },
  test: {
    // https://testing-library.com/docs/react-testing-library/setup#auto-cleanup-in-vitest
    globals: true,
    environment: "happy-dom",
    setupFiles: "./src/setupTests.ts",
  },
});
