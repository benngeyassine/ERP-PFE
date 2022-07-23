import Leave from "../models/leave.js";
import express from "express";
import mongoose from "mongoose";

export const getLeaves = async (req, res) => {
  try {
    const leave = await Leave.find();

    res.status(200).json(leave);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createLeaves = async (req, res) => {
  const leave = req.body;
  const newLeave = new Leave(leave);
  try {
    await newLeave.save();

    res.status(201).json(newLeave);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateLeave = async (req, res) => {
  const { id } = req.params;
  const leave = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(404).send("No leave with that id");

  const updatedLeave = await Leave.findByIdAndUpdate(
    id,
    { ...leave },
    {
      new: true,
    }
  );

  res.json(updatedLeave);
};

export const deleteLeave = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No leave with that id");

  await Leave.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Leave deleted seccessfully" });
};
