import { Router } from "express";
import {
  listCharacters,
  getCharacter,
  listByCreator,
  listFollowing,
  createCharacter
} from "../controllers/character";

const router = Router();

router
  .get("/",         listCharacters)
  .get("/:id",      getCharacter)
  .get("/creator/:creatorId", listByCreator)
  .get("/following/:userId", listFollowing)
  .post("/",        createCharacter);

export default router;