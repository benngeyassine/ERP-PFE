import mongoose from "mongoose";

const vendorSchema = mongoose.Schema({
  name: String,
  tel: Number,
  addr: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const vendor = mongoose.model("vendor", vendorSchema);
export default vendor;
