import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  REF: String,
  addr: String,
  cost: Number,
  begin_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "task",
    },
  ],
  costumer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "costumer",
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

const project = mongoose.model("project", projectSchema);
export default project;
