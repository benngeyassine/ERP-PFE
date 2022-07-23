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
import leaveRoutes from "./routes/leave.js";
import presenceRoutes from "./routes/presence.js";
import projectRoutes from "./routes/project.js";
import taskRoutes from "./routes/task.js";

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
app.use("/leave", leaveRoutes);
app.use("/presence", presenceRoutes);
app.use("/project", projectRoutes);
app.use("/task", taskRoutes);

const PORT = process.env.PORT || 5000;
await mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Hey <3, My heart <3 is Runinig on port:${PORT} `)
    )
  )
  .catch((error) => console.log(error.message));
