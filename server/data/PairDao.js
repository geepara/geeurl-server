const Pair = require("../model/Pair");
const ApiError = require("../model/ApiError");
const sha256 = require("sha256");
const mongoose = require("mongoose");

class PairDao {
  async create({ long }) {
    //generate short URL from long
    const short = sha256(long).substring(0, 7);
    let pair = await Pair.find({ short: short });
    if (pair[0]) {
      return await Pair.findById(pair[0]._id);
    }
    pair = await Pair.create({ short: short, long: long });
    return pair;
  }

  async read(short) {
    const data = await Pair.find({ short: short });
    const pair = await Pair.findById(data[0]._id);
    if (!pair) {
      throw new ApiError(404, "This URL doesn't exist!");
    }
    return pair;
  }
}

module.exports = PairDao;
