import express from "express";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();

// enable cross origin resource sharing
app.use(cors());
// enable server to take JSON in http request body
app.use(express.json());

// routes
app.use("/api/tasks", taskRoutes);

export default app;
