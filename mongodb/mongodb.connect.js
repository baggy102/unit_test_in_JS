const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://rlgh0806:4yk7FiuJgtI8cEJS@todo-tdd.wvgxx9a.mongodb.net/", { useNewUrlParser: true });
  } catch (err) {
    console.error("Error connection to mongodb");
    console.err(err);
  }
}

module.exports = { connect };
