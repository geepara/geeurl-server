require("dotenv").config();
const db = require("./server/data/db");
const app = require("./server/index");

const PORT = process.env.PORT || 5050;

db.connect();

app.listen(PORT, () => {
  console.log("Express app is running!");
});
