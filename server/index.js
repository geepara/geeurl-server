require("dotenv").config();
const express = require("express");
const PairDao = require("./data/PairDao");

const pairs = new PairDao();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gee URL API!");
});

app.get("/:short", async (req, res) => {
  const { short } = req.params;
  const data = await pairs.read(short);
  if (data === null) {
    res.status(403).json({ message: "URL not found" });
    // redirect to home page
  }
  res.redirect(data.long);
});

app.post("/", async (req, res) => {
  try {
    const { long } = req.body;
    const data = await pairs.create({ long });
    res.status(201).json({ data });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

module.exports = app;
