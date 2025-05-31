import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization?.split(" ");
  if (auth?.[0] !== "Bearer" || !auth[1]) return res.sendStatus(401);
  try {
    const payload = jwt.verify(auth[1], process.env.JWT_SECRET!);
    // @ts-ignore
    req.user = { id: (payload as any).sub };
    next();
  } catch {
    res.sendStatus(401);
  }
}
