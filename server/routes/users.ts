import { Router } from "express";
import { getUser, createUser, getUsers, deleteUser, updateUser } from "../controllers/users";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;