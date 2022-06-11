import express from "express";

import {
  getCostumers,
  createCostumers,
  updateCostumer,
  deleteCostumer,
} from "../controllers/Costumers.js";

//import auth from "../middleware/auth.js";

const router = express.Router();

//router.get("/", auth, getCostumers);
router.get("/", getCostumers);
router.post("/", createCostumers);
router.patch("/:id", updateCostumer);
router.delete("/:id", deleteCostumer);
export default router;
