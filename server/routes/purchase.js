import express from "express";

import {
  getPurchases,
  createPurchases,
  updatePurchase,
  deletePurchase,
} from "../controllers/Purchases.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getPurchases);
router.post("/", auth, createPurchases);
router.patch("/:id", auth, updatePurchase);
router.delete("/:id", auth, deletePurchase);
export default router;
