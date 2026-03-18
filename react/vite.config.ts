/// <reference types="vitest/config" />

import msal from "@intility/vite-plugin-msal";
import babel from "@rolldown/plugin-babel";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    msal(),
    checker({
      typescript: true,
      biome: {
        command: "check",
      },
      eslint: {
        lintCommand: "eslint",
        useFlatConfig: true,
      },
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
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
