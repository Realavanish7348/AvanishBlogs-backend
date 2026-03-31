import express from "express";
import { getAllRecentBlogs } from "../controllers/blogController.js";

const router = express.Router();

router.get("/", getAllRecentBlogs);

export default router;
