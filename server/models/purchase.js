import mongoose from "mongoose";

const purchaseSchema = mongoose.Schema({
  purchase_date: Date,
  payment_method: String,
  purchase_amount: Number,
  products: [
    {
      name: String,
      price: String,
      ref: String,
      amount: String,
    },
  ],
  vendorId: String,
  userId: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const purchase = mongoose.model("purchase", purchaseSchema);
export default purchase;
