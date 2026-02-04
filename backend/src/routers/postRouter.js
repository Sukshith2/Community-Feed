import express from "express";
import { CreatePost, getfeed } from "../controllers/PostController.js";

const router = express.Router();

router.post("/", CreatePost);
router.get("/", getfeed);

export default router;
