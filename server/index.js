import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/user.js";
import costumerRoutes from "./routes/costumer.js";
import productsRoutes from "./routes/products.js";
import purchaseRoutes from "./routes/purchase.js";
import saleRoutes from "./routes/sale.js";
import vendorsRoutes from "./routes/vendors.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/user", userRoutes);
app.use("/costumer", costumerRoutes);
app.use("/products", productsRoutes);
app.use("/purchase", purchaseRoutes);
app.use("/sale", saleRoutes);
app.use("/vendors", vendorsRoutes);

const PORT = process.env.PORT || 5000;
await mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port:${PORT} `))
  )
  .catch((error) => console.log(error.message));
