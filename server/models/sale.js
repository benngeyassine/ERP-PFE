import mongoose from "mongoose";

const saleSchema = mongoose.Schema({
  sale_date: Date,
  sale_amount: Number,
  payment_method: String,
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

const sale = mongoose.model("sale", saleSchema);
export default sale;
