// server/index.ts
import { createServer } from "http";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { buildApp } from "./app";
import { setupVite, serveStatic } from "./vite";
import cors from "cors";

dotenv.config();

async function start() {
  // 1) Connect to MongoDB first
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "test",           // ensure you hit your 'test' database
    });
    console.log("✅ MongoDB connected to", mongoose.connection.name);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }

  // 2) Build your Express + Vite app
  const app = buildApp();

  // 3) Enable CORS if needed
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

  // 4) Create & start the server
  const server = createServer(app);

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = Number(process.env.PORT) || 5001;
  server.listen(port, () => {
    console.log(`🚀 Server listening on http://localhost:${port}`);
  });
}

start();
