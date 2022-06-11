import express from "express";

import {
  getSales,
  createSales,
  updateSale,
  deleteSale,
} from "../controllers/Sales.js";

//import auth from "../middleware/auth.js";

const router = express.Router();

//router.get("/", auth, getSales);
router.get("/", getSales);
router.post("/", createSales);
router.patch("/:id", updateSale);
router.delete("/:id", deleteSale);
export default router;
