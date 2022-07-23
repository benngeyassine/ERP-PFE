import Presence from "../models/presence.js";
import express from "express";
import mongoose from "mongoose";

export const getPresences = async (req, res) => {
  try {
    const presence = await Presence.find();

    res.status(200).json(presence);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPresences = async (req, res) => {
  const presence = req.body;
  const newPresence = new Presence(presence);
  try {
    await newPresence.save();

    res.status(201).json(newPresence);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePresence = async (req, res) => {
  const { id } = req.params;
  const presence = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(404).send("No presence with that id");

  const updatedPresence = await Presence.findByIdAndUpdate(
    id,
    { ...presence },
    {
      new: true,
    }
  );

  res.json(updatedPresence);
};

export const deletePresence = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No presence with that id");

  await Presence.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Presence deleted seccessfully" });
};
