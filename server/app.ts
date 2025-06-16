import express, { Request, Response, NextFunction } from "express";
import path from "path";
import multer from "multer";
import cors from "cors";
import { CharacterModel } from "./db/models/CharacterModel.ts";
import characterRouter from "./routes/character";
import creatorRouter from "./routes/creators";
import userRouter from "./routes/users";
import chatRouter from "./routes/chats";
import followRouter from "./routes/follows";

export function buildApp(): express.Express {
  const app = express();

  // Enable CORS for front-end
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

  // Body parsing
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Simple request logging
  app.use((req: Request, _res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  // Multer memory storage for uploads
  const upload = multer({ storage: multer.memoryStorage() });

  // DELETE /api/characters/avatars
app.delete(
  "/api/characters/avatars",
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await CharacterModel.updateMany(
        {},
        { $unset: { avatar: "" } }
      );
      return res.json({
        message: `Removed avatar from ${result.modifiedCount} characters`,
      });
    } catch (err) {
      next(err);
    }
  }
);
  // Upload avatar into MongoDB
  app.post(
    "/api/characters/:id/avatar",
    upload.single("avatar"),
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        if (!req.file) throw new Error("No file uploaded");
        const id = Number(req.params.id);
        await CharacterModel.updateOne(
          { id },
          { avatar: { data: req.file.buffer, contentType: req.file.mimetype } }
        );
        res.json({ message: "Avatar stored in DB" });
      } catch (err) {
        next(err);
      }
    }
  );

  // // Serve avatar from MongoDB
  // app.get(
  //   "/api/characters/:id/avatar",
  //   async (req: Request, res: Response, next: NextFunction) => {
  //     try {
  //       const id = Number(req.params.id);
  //       const char = await CharacterModel.findOne({ id });
  //       if (!char?.avatar?.data) return res.sendStatus(404);
  //       res.contentType(char.avatar.contentType);
  //       res.send(char.avatar.data);
  //     } catch (err) {
  //       next(err);
  //     }
  //   }
  // );

  // Mount REST routers under /api
  app.use("/api/characters", characterRouter);
  app.use("/api/creators", creatorRouter);
  app.use("/api/users", userRouter);
  app.use("/api/chats", chatRouter);
  app.use("/api/follows", followRouter);

  app.get("/health", (_req, res) => res.sendStatus(204));

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);
    res.status(500).json({ message: err.message || "Server error" });
  });

  return app;
}