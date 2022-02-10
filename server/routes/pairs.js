const PairDao = require("../data/PairDao");
const express = require("express");

const router = express.Router();

const pairs = new PairDao();

router.get("/:short", async (req, res) => {
  try {
    const { short } = req.params;
    const data = await pairs.read(short);
    if (data[0]) {
      res.redirect(data[0].long);
    } else {
      res.status(404).json({ message: "URL doesn't exist!" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { long } = req.body;
    const data = await pairs.create({ long });
    res.status(201).json({ data });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

module.exports = router;
