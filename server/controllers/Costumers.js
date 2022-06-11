import Costumer from "../models/costumer.js";
import express from "express";
import mongoose from "mongoose";

export const getCostumers = async (req, res) => {
  try {
    const costumer = await Costumer.find();

    res.status(200).json(costumer);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCostumers = async (req, res) => {
  const costumer = req.body;
  const newCostumer = new Costumer(costumer);
  try {
    await newCostumer.save();

    res.status(201).json(newCostumer);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateCostumer = async (req, res) => {
  const { id } = req.params;
  const costumer = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(404).send("No costumer with that id");

  const updatedCostumer = await Costumer.findByIdAndUpdate(
    id,
    { ...costumer, _id },
    {
      new: true,
    }
  );

  res.json(updatedCostumer);
};

export const deleteCostumer = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No costumer with that id");

  await Costumer.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Costumer deleted seccessfully" });
};
