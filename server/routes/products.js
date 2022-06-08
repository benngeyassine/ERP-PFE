import express from "express";

import {
  getProducts,
  createProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getProducts);
router.post("/", auth, createProducts);
router.patch("/:id", auth, updateProduct);
router.delete("/:id", auth, deleteProduct);
export default router;
