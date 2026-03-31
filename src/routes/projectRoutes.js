import express from "express";
import { getPojectBlogs } from "../controllers/projectController.js";

const router = express.Router();

router.get("/", getPojectBlogs);

export default router;
