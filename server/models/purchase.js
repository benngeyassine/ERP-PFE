import mongoose from "mongoose";

const purchaseSchema = mongoose.Schema({
  purchase_date: Date,
  payment_method: String,
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

const purchase = mongoose.model("purchase", purchaseSchema);
export default purchase;
