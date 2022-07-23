import express from "express";

import {
  getPresences,
  createPresences,
  updatePresence,
  deletePresence,
} from "../controllers/Presence.js";

//import auth from "../middleware/auth.js";

const router = express.Router();

//router.get("/", auth, getPresences);
router.get("/", getPresences);
router.post("/", createPresences);
router.patch("/:id", updatePresence);
router.delete("/:id", deletePresence);
export default router;
