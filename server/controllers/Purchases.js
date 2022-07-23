import Purchase from "../models/purchase.js";
import Product from "../models/product.js";
import Costumer from "../models/costumer.js";
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

export const createPurchases = async (req, res, ctx) => {
  const userId = req.headers?.userid;
  const purchase = req.body;
  const products = req.body.products;
  const newPurchase = new Purchase(purchase);
  products.map((product) => {
    const newProduct = new Product(product);
    newProduct.save();
  });
  newPurchase.purchase_date = req.body.purchase_date;
  newPurchase.payment_method = req.body.payment_method;
  newPurchase.purchase_amount = req.body.purchase_amount;
  newPurchase.vendorId = req.body.vendorId;
  newPurchase.userId = userId;

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

  const checkpurshase = await Purchase.findById({ _id: id })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log({ err }));

  if (!checkpurshase) return res.status(404).send("No purchase with that id");

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

  const checkpurshase = await Purchase.findById({ _id: id })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log({ err }));

  if (!checkpurshase) return res.status(404).send("No purchase with that id");

  await Purchase.findByIdAndRemove(id);
  console.log("DELETE!");
  res.json({ message: "Purchase deleted seccessfully" });
};
