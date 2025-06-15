import { createServer } from "http";
import { buildApp }      from "./app";
import { setupVite, serveStatic } from "./vite";
import cors from "cors";

(async () => {
  const app = buildApp();

  app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
  }));

  const server = createServer(app);

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = Number(process.env.PORT) || 5001;
  server.listen(port, () => {
    console.log(` Listening on http://localhost:${port}`);
  });
})();