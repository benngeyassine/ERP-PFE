import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  ref: String,
  amount: Number,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const product = mongoose.model("product", productSchema);
export default product;
