import Product from "../models/product.js";
import express from "express";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();

    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProducts = async (req, res) => {
  const product = req.body;
  const newProduct = new Product(product);
  try {
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(404).send("No product with that id");

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { ...product, _id },
    {
      new: true,
    }
  );

  res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No product with that id");

  await Product.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Product deleted seccessfully" });
};
