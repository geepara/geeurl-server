const Pair = require("../model/Pair");
const ApiError = require("../model/ApiError");
const sha256 = require("sha256");
const mongoose = require("mongoose");

class PairDao {
  async create({ long }) {
    //generate short URL from long
    const short = sha256(long).substring(0, 7);
    const pair = await Pair.find({ short: short });
    if (pair.length === 0) {
      return await Pair.create({ short: short, long: long });
    }
    return pair;
  }

  async read(short) {
    const pair = await Pair.find({ short: short });
    if (!pair) {
      throw new ApiError(404, "This URL doesn't exist!");
    }
    return pair;
  }
}

module.exports = PairDao;
