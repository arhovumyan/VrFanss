import { Request, Response } from "express";
import { storage } from "../storage";
import { insertFollowSchema } from "../db/models/follows";

export async function listFollowers(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    res.json(await storage.getFollowers(userId));
  } catch (err) {
    console.error("⚠️ listFollowers error:", err);
    res.status(500).json({ message: "Failed to fetch followers" });
  }
}

export async function listFollowing(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.userId);
    res.json(await storage.getFollowing(userId));
  } catch (err){
    console.error("⚠️ listCreators error:", err);
    res.status(500).json({ message: "Failed to fetch following" });
  }
}

export async function createFollow(req: Request, res: Response) {
  try {
    const data   = insertFollowSchema.parse(req.body);
    const follow = await storage.createFollow(data);
    res.status(201).json(follow);
  } catch {
    res.status(400).json({ message: "Invalid follow data" });
  }
}

export async function deleteFollow(req: Request, res: Response) {
  try {
    const fId = parseInt(req.params.followerId);
    const tId = parseInt(req.params.followedId);
    if (await storage.deleteFollow(fId, tId)) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Follow not found" });
    }
  } catch {
    res.status(500).json({ message: "Failed to unfollow" });
  }
}