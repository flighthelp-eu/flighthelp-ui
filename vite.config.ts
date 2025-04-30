import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/**/*.ts", "src/**/*.tsx", "index.ts"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "FlightHelpUI",
      formats: ["es", "umd"],
      fileName: (format) => `flighthelp-ui.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@mui/material",
        "@mui/material/Button",
        "@mui/styles",
        "@emotion/react",
        "@emotion/styled",
      ],
      output: {
        interop: "auto",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@mui/material": "MaterialUI",
          "@mui/material/Button": "MaterialUIButton",
          "@mui/styles": "MaterialUIStyles",
          "@emotion/react": "emotionReact",
          "@emotion/styled": "emotionStyled",
        },
      },
    },
    sourcemap: true,
    minify: false,
    target: "es2015",
    emptyOutDir: true,
  },
});
