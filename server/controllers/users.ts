import { Request, Response } from "express";
import { storage } from "../storage";

export async function getUser(req: Request, res: Response) {
  try {
    const id   = parseInt(req.params.id);
    const user = await storage.getUser(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    const { password, ...safe } = user;
    res.json(safe);
  } catch (err) {
    console.error(" getUser error:", err);
    res.status(500).json({ message: "Failed to fetch user" });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const user = await storage.getUser(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    
    await storage.deleteUser(id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(" deleteUser error:", err);
    res.status(500).json({ message: "Failed to delete user" });
  }
}
export async function updateUser(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const user = await storage.getUser(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { username, email, avatar, bio } = req.body;
    const updatedUser = await storage.updateUser(id, {
      username,
      email,
      avatar,
      bio
    });

    // this will be after setting up the password and username validation
    //const { password, ...safe } = updatedUser;
    //res.json(safe);
  } catch (err) {
    console.error(" updateUser error:", err);
    res.status(500).json({ message: "Failed to update user" });
  }
}
export async function createUser(req: Request, res: Response) {
  try {
    const { username, email, password, avatar, bio } = req.body;
    const newUser = await storage.createUser({
      username,
      email,
      password,
      avatar: avatar ?? null,
      bio: bio ?? null
    });

    const { password: _, ...safe } = newUser; // exclude password from response
    res.status(201).json(safe);
  } catch (err) {
    console.error(" createUser error:", err);
    res.status(400).json({ message: "Invalid user data" });
  }
}
export async function getUsers(req: Request, res: Response) {
  try {
    const limit  = parseInt(req.query.limit  as string) || 50;
    const offset = parseInt(req.query.offset as string) || 0;
    res.json(await storage.getUsers(limit, offset));
  } catch(err) {
    console.error("⚠️ GetUsers error:", err);
    res.status(500).json({ message: "Failed to fetch users" });
  }
}