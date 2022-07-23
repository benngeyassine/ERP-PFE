import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  begin_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  description: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "project",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const task = mongoose.model("task", taskSchema);
export default task;
