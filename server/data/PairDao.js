const Pair = require("../model/Pair");
const ApiError = require("../model/ApiError");
const mongoose = require("mongoose");

class PairDao {
  async create({ long }) {
    if (long === undefined) {
      throw new ApiError(400, "Every pair must have a long URL!");
    }
    //generate short URL from long
    const short = long;

    return await Pair.create({ long: long, short: short });
  }

  async read(short) {
    if (short === undefined) {
      throw new ApiError(500, "Short parameter must be provided!");
    }

    const pair = await Pair.find({ short: short });

    return pair;
  }
}

module.exports = PairDao;
