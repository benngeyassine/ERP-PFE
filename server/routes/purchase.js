import express from "express";

import {
  getPurchases,
  createPurchases,
  updatePurchase,
  deletePurchase,
} from "../controllers/Purchases.js";

//import auth from "../middleware/auth.js";

const router = express.Router();

//router.get("/", auth, getPurchases);
router.get("/", getPurchases);
router.post("/", createPurchases);
router.patch("/:id", updatePurchase);
router.delete("/:id", deletePurchase);
export default router;
