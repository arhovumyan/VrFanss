import { Router } from "express";
import {
  listChatsByUser,
  createChat
} from "../controllers/chats";

const router = Router();

router
  .get("/user/:userId", listChatsByUser)
  .post("/",            createChat);

export default router;