import { Request, Response } from "express";
import { storage } from "../storage";
import { insertChatSchema } from "../db/models/chats";

export async function listChatsByUser(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const chats  = await storage.getChatsByUser(userId);
    const enriched = await Promise.all(
      chats.map(async c => ({
        ...c,
        character: await storage.getCharacter(c.characterId!)
      }))
    );
    res.json(enriched);
  } catch {
    res.status(500).json({ message: "Failed to fetch chats" });
  }
}

export async function createChat(req: Request, res: Response) {
  try {
    const data = insertChatSchema.parse(req.body);
    const chat = await storage.createChat(data);
    res.status(201).json(chat);
  } catch {
    res.status(400).json({ message: "Invalid chat data" });
  }
}