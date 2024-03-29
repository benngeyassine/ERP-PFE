import mongoose from "mongoose";

const costumerSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  addr: String,
  tel: Number,
  note: String,
  email: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const costumer = mongoose.model("costumer", costumerSchema);
export default costumer;
