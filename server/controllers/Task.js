import Task from "../models/task.js";
import express from "express";
import mongoose from "mongoose";

export const getTasks = async (req, res) => {
  try {
    const task = await Task.find();

    res.status(200).json(task);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
  const task = req.body;
  const newTask = new Task(task);
  try {
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(404).send("No task with that id");

  const updatedTask = await Task.findByIdAndUpdate(
    id,
    { ...task },
    {
      new: true,
    }
  );

  res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No task with that id");

  await Task.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Task deleted seccessfully" });
};
