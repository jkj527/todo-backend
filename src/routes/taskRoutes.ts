import { Router } from "express";
import {
  getTasks,
  createTask,
  editTask,
  deleteTask,
} from "../controllers/taskController";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", editTask);
router.delete("/:id", deleteTask);

export default router;
