require("dotenv").config();
const pairs = require("./routes/pairs");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gee URL API!");
});

app.use(pairs);

module.exports = app;
