const mongoose = require("mongoose");
const FrameDataModel = require("./frameDataModel");
const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  moveSet: {
    type: [FrameDataModel.schema],
  },
});
const CharacterModel = mongoose.model("CharacterModel", CharacterSchema);
module.exports = CharacterModel;
