import express from "express";
import morgan from "morgan";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/images", express.static("public/images"));
app.use("/api/v1/blogposts", blogRoutes);
app.use("/api/v1/projectposts", projectRoutes);

export default app;
