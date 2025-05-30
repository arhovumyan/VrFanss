import { Router } from "express";
import { getUser } from "../controllers/users";

const router = Router();

router
  .get("/:id", getUser);
  //.get("/", getUsers);

export default router;