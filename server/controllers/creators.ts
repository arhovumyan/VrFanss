import { Request, Response } from "express";
import { storage } from "../storage";

export async function listCreators(req: Request, res: Response) {
  try {
    const limit  = parseInt(req.query.limit  as string) || 50;
    const offset = parseInt(req.query.offset as string) || 0;
    res.json(await storage.getCreators(limit, offset));
  } catch(err) {
    console.error("⚠️ listCreators error:", err);
    res.status(500).json({ message: "Failed to fetch creators" });
  }
}

export async function getCreator(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const c  = await storage.getCreator(id);
    if (!c) return res.status(404).json({ message: "Creator not found" });
    res.json(c);
  } catch {
    res.status(500).json({ message: "Failed to fetch creator" });
  }
}

export async function getByUser(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const c      = await storage.getCreatorByUserId(userId);
    if (!c) return res.status(404).json({ message: "Creator not found" });
    res.json(c);
  } catch {
    res.status(500).json({ message: "Failed to fetch creator" });
  }
}