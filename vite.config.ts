import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath, URL } from "url";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: fileURLToPath(new URL("./client", import.meta.url)),

  plugins: [
    tailwindcss(),
    react(),
    tsconfigPaths(),              
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then(m =>
            m.cartographer()
          ),
        ]
      : []),
  ],

  resolve: {
    alias: {
      // any manual aliases you still want:
      "@assets": fileURLToPath(new URL("./attached_assets", import.meta.url)),
    },
  },

  server: {
    proxy: {
      // Proxy API requests to the backend server
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
        secure: false,
      },
    },
  },

  build: {
    outDir: fileURLToPath(new URL("./dist/public", import.meta.url)),
    emptyOutDir: true,
  },
});