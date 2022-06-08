import express from "express";

import {
  getVendors,
  createVendors,
  updateVendor,
  deleteVendor,
} from "../controllers/Vendors.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getVendors);
router.post("/", auth, createVendors);
router.patch("/:id", auth, updateVendor);
router.delete("/:id", auth, deleteVendor);
export default router;
