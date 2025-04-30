import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";
import pkg from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    svgr(), // Añadido para compatibilidad con el cliente
    dts({
      insertTypesEntry: true,
      include: ["src/**/*.ts", "src/**/*.tsx", "index.ts"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // Configurar el alias @ para resolver rutas como en el cliente
    },
  },
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
    target: "esnext", // Cambiado de es2015 a esnext para coincidir con el cliente
    emptyOutDir: true,
  },
});
