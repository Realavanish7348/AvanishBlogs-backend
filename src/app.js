import express from "express";
import morgan from "morgan";
import cors from "cors";

import blogRoutes from "./routes/blogRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/images", express.static("public/images"));
app.use("/api/v1/recentblogs", blogRoutes);

export default app;
