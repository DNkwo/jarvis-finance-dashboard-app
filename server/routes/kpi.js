import express from "express";
import KPI from "../models/KPI.js"; //object document mapping, makes it easier to grab information direct from database


const router = express.Router();

router.get("/kpis", async (req, res) => {
  try {
    const kpis = await KPI.find(); //grabs all kpis
    res.status(200).json(kpis); //sends it to the front end

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
