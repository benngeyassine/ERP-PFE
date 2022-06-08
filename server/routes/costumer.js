import express from "express";

import {
  getCostumers,
  createCostumers,
  updateCostumer,
  deleteCostumer,
} from "../controllers/Costumers.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getCostumers);
router.post("/", auth, createCostumers);
router.patch("/:id", auth, updateCostumer);
router.delete("/:id", auth, deleteCostumer);
export default router;
