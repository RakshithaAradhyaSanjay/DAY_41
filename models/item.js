const mongoose = require("mongoose");

//define the item schema

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

// we are going to create modal from the schema
const Item = mongoose.model("Item",itemSchema);

module.exports = Item;