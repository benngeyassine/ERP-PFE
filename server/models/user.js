import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  tel: { type: Number, require: true },
  addr: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  type: { type: String, require: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const user = mongoose.model("User", userSchema);
export default user;
