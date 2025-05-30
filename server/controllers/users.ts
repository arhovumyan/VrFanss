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
    console.error("⚠️ getUser error:", err);
    res.status(500).json({ message: "Failed to fetch user" });
  }
}

// export async function getUsers(req: Request, res: Response) {
//   try {
//     const limit  = parseInt(req.query.limit  as string) || 50;
//     const offset = parseInt(req.query.offset as string) || 0;
//     const users  = await storage.getUsers(limit, offset);
//     const safeUsers = users.map(({ password, ...safe }) => safe);
//     res.json(safeUsers);
//   } catch (err) {
//     console.error("⚠️ getUsers error:", err);
//     res.status(500).json({ message: "Failed to fetch users" });
//   }
// }