import express from "express";
import Product from "../models/Product.js"; //object document mapping, makes it easier to grab information direct from database


const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find(); //searches database collection, grabbing a list
    res.status(200).json(products); //sends it to the front end

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
