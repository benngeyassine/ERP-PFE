import Vendor from "../models/vendor.js";
import express from "express";
import mongoose from "mongoose";

export const getVendors = async (req, res) => {
  try {
    const vendor = await Vendor.find();

    res.status(200).json(vendor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createVendors = async (req, res) => {
  const vendor = req.body;
  const newVendor = new Vendor(vendor);
  try {
    await newVendor.save();

    res.status(201).json(newVendor);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateVendor = async (req, res) => {
  const { id } = req.params;
  const vendor = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(404).send("No vendor with that id");

  const updatedVendor = await Vendor.findByIdAndUpdate(
    id,
    { ...vendor, _id },
    {
      new: true,
    }
  );

  res.json(updatedVendor);
};

export const deleteVendor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No vendor with that id");

  await Vendor.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Vendor deleted seccessfully" });
};
