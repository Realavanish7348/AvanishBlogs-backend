import express from "express";
import { getAllBlogs, getPosts } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.get("/getposts", getPosts);

export default router;
