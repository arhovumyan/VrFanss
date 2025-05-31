// server/app.ts
import express, { Request, Response, NextFunction } from "express";
import characterRouter from "./routes/character";
import creatorRouter   from "./routes/creators";
import userRouter      from "./routes/users";
import chatRouter      from "./routes/chats";
import followRouter    from "./routes/follows";

export function buildApp(): express.Express {
  const app = express();

  // JSON + URL-encoded parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // simple logging middleware
  app.use((req: Request, _res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  // mount each resource router under /api
  app.use("/api/characters", characterRouter);
  app.use("/api/creators",   creatorRouter);
  app.use("/api/users",      userRouter);
  app.use("/api/chats",      chatRouter);
  app.use("/api/follows", followRouter);


  // health-check
  app.get("/health", (_req, res) => res.sendStatus(204));

  // global error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    res.status(err.status || 500).json({ message: err.message || "Server error" });
  });

  return app;
}