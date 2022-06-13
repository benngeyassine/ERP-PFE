import Sale from "../models/sale.js";
import express from "express";
import mongoose from "mongoose";

export const getSales = async (req, res) => {
  try {
    const sale = await Sale.find();

    res.status(200).json(sale);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSales = async (req, res) => {
  const sale = req.body;
  const newSale = new Sale(sale);
  try {
    await newSale.save();

    res.status(201).json(newSale);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateSale = async (req, res) => {
  const { id } = req.params;
  const sale = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(404).send("No sale with that id");

  const updatedSale = await Sale.findByIdAndUpdate(
    id,
    { ...sale },
    {
      new: true,
    }
  );

  res.json(updatedSale);
};

export const deleteSale = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No sale with that id");

  await Sale.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Sale deleted seccessfully" });
};
