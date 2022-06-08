import express from "express";

import {
  getSales,
  createSales,
  updateSale,
  deleteSale,
} from "../controllers/Sales.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getSales);
router.post("/", auth, createSales);
router.patch("/:id", auth, updateSale);
router.delete("/:id", auth, deleteSale);
export default router;
