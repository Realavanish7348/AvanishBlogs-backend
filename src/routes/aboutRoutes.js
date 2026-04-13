import express from "express";
import { getBioData } from "../controllers/aboutController.js";

const router = express.Router();

router.get("/", getBioData);

export default router;
