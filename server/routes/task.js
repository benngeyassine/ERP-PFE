import express from "express";

import {
  getTasks,
  createTasks,
  updateTask,
  deleteTask,
} from "../controllers/Task.js";

//import auth from "../middleware/auth.js";

const router = express.Router();

//router.get("/", auth, getTasks);
router.get("/", getTasks);
router.post("/", createTasks);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
export default router;
