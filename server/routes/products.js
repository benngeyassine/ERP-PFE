import express from "express";

import {
  getProducts,
  createProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/Products.js";

//import auth from "../middleware/auth.js";

const router = express.Router();
//router.get("/", auth, getProducts);
router.get("/", getProducts);
router.post("/", createProducts);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);
export default router;
