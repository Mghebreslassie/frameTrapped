const mongoose = require("mongoose");
const FrameDataSchema = new mongoose.Schema({
  command: {
    type: String,
    required: true,
  },
  damage: {
    type: String,
    required: true,
  },
  guard: {
    type: String,
    required: true,
  },
  startup: {
    type: String,
    required: true,
  },
  active: {
    type: String,
    required: true,
  },
  recovery: {
    type: String,
  },
  on_block: {
    type: String,
    required: true,
  },
  invulnerability: {
    type: String,
    required: true,
  },
});
const FrameDataModel = mongoose.model("FrameData", FrameDataSchema);
module.exports = FrameDataModel;
