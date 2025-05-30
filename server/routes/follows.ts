import { Router } from "express";
import {listFollowers,listFollowing,createFollow,deleteFollow} from "../controllers/follows";

const router = Router();

router
  .get("/followers/:userId", listFollowers)
  .get("/following/:userId", listFollowing)
  .post("/",                 createFollow)
  .delete("/:followerId/:followedId", deleteFollow);

export default router;