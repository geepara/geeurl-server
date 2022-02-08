require("dotenv").config();
const notes = require("./routes/notes");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gee URL API!");
});

module.exports = app;
