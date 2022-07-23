import express from "express";

import {
  getLeaves,
  createLeaves,
  updateLeave,
  deleteLeave,
} from "../controllers/Leave.js";

//import auth from "../middleware/auth.js";

const router = express.Router();

//router.get("/", auth, getLeaves);
router.get("/", getLeaves);
router.post("/", createLeaves);
router.patch("/:id", updateLeave);
router.delete("/:id", deleteLeave);
export default router;
