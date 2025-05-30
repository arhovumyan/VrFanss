import { Request, Response } from "express";
import { storage } from "../storage";
import { insertCharacterSchema } from "../db/models/characters";

export async function listCharacters(req: Request, res: Response) {
  try {
    const limit  = parseInt(req.query.limit  as string) || 50;
    const offset = parseInt(req.query.offset as string) || 0;
    const chars  = await storage.getCharacters(limit, offset);
    res.json(chars);
  } catch (err) {
    console.error("⚠️ listCharacters error:", err);
    res.status(500).json({ message: "Failed to fetch characters" });
  }
}

export async function getCharacter(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const char = await storage.getCharacter(id);
    if (!char) return res.status(404).json({ message: "Character not found" });
    res.json(char);
  } catch {
    res.status(500).json({ message: "Failed to fetch character" });
  }
}

export async function listByCreator(req: Request, res: Response) {
  try {
    const creatorId = parseInt(req.params.creatorId);
    const chars = await storage.getCharactersByCreator(creatorId);
    res.json(chars);
  } catch {
    res.status(500).json({ message: "Failed to fetch characters by creator" });
  }
}

export async function listFollowing(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const chars = await storage.getFollowedCharacters(userId);
    res.json(chars);
  } catch {
    res.status(500).json({ message: "Failed to fetch followed characters" });
  }
}

export async function createCharacter(req: Request, res: Response) {
  try {
    const data = insertCharacterSchema.parse(req.body);
    const char = await storage.createCharacter(data);
    res.status(201).json(char);
  } catch {
    res.status(400).json({ message: "Invalid character data" });
  }
}