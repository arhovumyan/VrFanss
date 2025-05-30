// server/index.ts

import { createServer } from "http";
import { buildApp }      from "./app";
import { setupVite, serveStatic } from "./vite";

(async () => {
  const app    = buildApp();
  const server = createServer(app);

  if (process.env.NODE_ENV === "development") {
    // Hook up Vite HMR for your React client
    await setupVite(app, server);
  } else {
    // In production, serve the built client out of /dist or /public
    serveStatic(app);
  }

  const port = Number(process.env.PORT) || 5001;
  server.listen(port, () => {
    console.log(` Listening on http://localhost:${port}`);
  });
})();