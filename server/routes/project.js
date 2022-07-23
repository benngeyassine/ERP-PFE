import express from "express";

import {
  getProjects,
  createProjects,
  updateProject,
  deleteProject,
} from "../controllers/Project.js";

//import auth from "../middleware/auth.js";

const router = express.Router();

//router.get("/", auth, getProjects);
router.get("/", getProjects);
router.post("/", createProjects);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);
export default router;
