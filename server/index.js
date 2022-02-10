require("dotenv").config();
const pairs = require("./routes/pairs");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Gee URL API!");
});

app.use(pairs);

module.exports = app;
