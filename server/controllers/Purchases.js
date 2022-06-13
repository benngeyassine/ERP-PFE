import Purchase from "../models/purchase.js";
import express from "express";
import mongoose from "mongoose";

export const getPurchases = async (req, res) => {
  try {
    const purchase = await Purchase.find();

    res.status(200).json(purchase);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPurchases = async (req, res) => {
  const purchase = req.body;
  const newPurchase = new Purchase(purchase);
  try {
    await newPurchase.save();

    res.status(201).json(newPurchase);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updatePurchase = async (req, res) => {
  const { id } = req.params;
  const purchase = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(404).send("No purchase with that id");

  const updatedPurchase = await Purchase.findByIdAndUpdate(
    id,
    { ...purchase },
    {
      new: true,
    }
  );

  res.json(updatedPurchase);
};

export const deletePurchase = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No purchase with that id");

  await Purchase.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Purchase deleted seccessfully" });
};
