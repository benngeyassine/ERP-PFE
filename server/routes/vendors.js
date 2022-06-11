import express from "express";

import {
  getVendors,
  createVendors,
  updateVendor,
  deleteVendor,
} from "../controllers/Vendors.js";

//import auth from "../middleware/auth.js";

const router = express.Router();

//router.get("/", auth, getVendors);
router.get("/", getVendors);
router.post("/", createVendors);
router.patch("/:id", updateVendor);
router.delete("/:id", deleteVendor);
export default router;
