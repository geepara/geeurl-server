const mongoose = require("mongoose");

const PairSchema = new mongoose.Schema({
  long: { type: String },
  short: { type: String },
});

const Pair = mongoose.model("Pair", PairSchema);

module.exports = Pair;
