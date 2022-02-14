const mongoose = require("mongoose");
const DetailSchema = new mongoose.Schema({
  Defense: {
    type: String,
    required: true,
  },
  Guts: {
    type: String,
    required: true,
  },
  Prejump: {
    type: String,
    required: true,
  },
  Backdash: {
    type: String,
    required: true,
  },
  Weight: {
    type: String,
    required: true,
  },
});
const DetailModel = mongoose.model("details", DetailSchema);
module.exports = DetailModel;
