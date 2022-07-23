import mongoose from "mongoose";

const presenceSchema = mongoose.Schema({
  date: {
    type: Date,
  },
  here: {
    type: Boolean,
    default: true,
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

const presence = mongoose.model("presence", presenceSchema);
export default presence;
