import mongoose from "mongoose";

const leaveSchema = mongoose.Schema({
  begin_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  pattern: String,
  approved: Boolean,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const leave = mongoose.model("leave", leaveSchema);
export default leave;
