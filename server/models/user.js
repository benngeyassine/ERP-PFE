import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  /* name: { type: String, require: true },
  tel: { type: Number, require: true },
  addr: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  type: { type: String, require: true },*/
  name: { type: String },
  tel: { type: Number },
  addr: { type: String },
  email: { type: String },
  password: { type: String },
  type: { type: String },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const user = mongoose.model("User", userSchema);
export default user;
