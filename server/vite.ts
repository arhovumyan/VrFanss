import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import { fileURLToPath } from "url";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

/**
 * Simple timestamped logger for Express/Vite integration
 */
export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}

/**
 * Sets up Vite in middleware mode for development:
 *  - Creates a Vite server with middlewareMode=true
 *  - Mounts vite.middlewares on the provided Express app
 *  - Serves index.html (with hot-reload query param) for all routes
 */
export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  // Use Vite's dev server middleware
  app.use(vite.middlewares);

  // For any route, load index.html from disk, inject a nanoid query on main.tsx for HMR cache-busting
  app.use("*", async (req, res, next) => {
    try {
      const url = req.originalUrl;
      const clientTemplatePath = path.resolve(
        // __dirname equivalent in ESM isn’t available here, but in dev Vite patches import.meta.url
        // We assume this file is under /server or similar. Adjust if your structure differs.
        path.dirname(fileURLToPath(import.meta.url)),
        "..",
        "client",
        "index.html"
      );

      let template = await fs.promises.readFile(clientTemplatePath, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );

      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

/**
 * Serves the production build (static files) from the "public" folder.
 *  - Computes __dirname via import.meta.url so this works in ESM at runtime.
 *  - Throws if dist/public doesn’t exist.
 *  - Serves index.html on any unknown route (SPA fallback).
 */
export function serveStatic(app: Express) {
  // Resolve __dirname in ESM context
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  // dist/public should contain your built client assets
  const distPath = path.resolve(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}. Make sure to build the client first.`
    );
  }

  // Serve all static files under /public
  app.use(express.static(distPath));

  // Fallback: serve index.html for SPA routing
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
