const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb+srv://rlgh0806:4yk7FiuJgtI8cEJS@todo-tdd.wvgxx9a.mongodb.net/?retryWrites=true&w=majority");
  } catch (err) {
    console.error(err);
    console.error("Error connecting to mongodb");
  }
}

module.exports = { connect };
