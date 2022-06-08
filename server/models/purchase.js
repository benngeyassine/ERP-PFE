import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  purchase_date: Date,
  purchase_amount: Number,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vendor",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const product = mongoose.model("product", productSchema);
export default product;
