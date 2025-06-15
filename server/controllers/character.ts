import { Request, Response } from "express";
import { storage } from "../storage";
import { insertCharacterSchema } from "../db/models/charactersOld";

//searches for a character
export async function listCharacters(req: Request, res: Response) {
  try {
    const limit  = parseInt(req.query.limit  as string) || 50;
    const offset = parseInt(req.query.offset as string) || 0;
    const chars  = await storage.getCharacters(limit, offset);
    res.json(chars);
  } catch (err) {
    console.error(" listCharacters error:", err);
    res.status(500).json({ message: "Failed to fetch characters" });
  }
}
//pulls out a character
export async function getCharacter(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const char = await storage.getCharacter(id);
    //review this part on why is there 2 errors handlers
    if (!char) return res.status(404).json({ message: "Character not found" });
    //here
    res.json(char);
  } catch {
    res.status(500).json({ message: "Failed to fetch character" });
  }
}
//list characters of a specific user
export async function listByCreator(req: Request, res: Response) {
  try {
    const creatorId = parseInt(req.params.creatorId);
    const chars = await storage.getCharactersByCreator(creatorId);
    res.json(chars);
  } catch {
    res.status(500).json({ message: "Failed to fetch characters by creator" });
  }
}
//lists the following of a user
export async function listFollowing(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    const chars = await storage.getFollowedCharacters(userId);
    res.json(chars);
  } catch {
    res.status(500).json({ message: "Failed to fetch followed characters" });
  }
}
//creates a character
export async function createCharacter(req: Request, res: Response) {
  try {
    const data = insertCharacterSchema.parse(req.body);
    const char = await storage.createCharacter(data);
    res.status(201).json(char);
  } catch {
    res.status(400).json({ message: "Invalid character data" });
  }
}