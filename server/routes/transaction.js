import express from "express";
import Transaction from "../models/Transaction.js"; //object document mapping, makes it easier to grab information direct from database


const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .limit(50)
      .sort({createdOn: -1}); //searches database collection, grabbing a list
    res.status(200).json(transactions); //sends it to the front end

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
