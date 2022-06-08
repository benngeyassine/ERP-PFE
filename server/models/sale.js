import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  sale_date: Date,
  sale_amount: Number,
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  costumerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "costumer",
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
