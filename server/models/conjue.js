import mongoose from "mongoose";

const saleSchema = mongoose.Schema({
  motif: Date,
  begin_date: {
    type: Date,
  },
  nombre_de_jour: Number,
  status: String,
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
