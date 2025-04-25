/// <reference types="vitest" />

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx,js,jsx}" --max-warnings 0',
      },
    }),
  ],
  resolve: {
    alias: {
      "~": "/src",
    },
  },
  server: {
    open: "http://localhost:3000",
    port: 3000,
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
  },
  // https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts
  // https://vitest.dev/config/
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
