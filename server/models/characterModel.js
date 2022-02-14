const mongoose = require("mongoose");
const FrameDataModel = require("./frameDataModel");
const ImageModel = require("./imageModel");
const DetailModel = require("./detailModel");
const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: DetailModel.schema,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  moveSet: {
    type: [FrameDataModel.schema],
    required: true,
  },
  avatarImageUrl: {
    type: String,
    required: true,
  },
  portraitImageUrl: {
    type: String,
    required: true,
  },
});
const CharacterModel = mongoose.model("CharacterModel", CharacterSchema);
module.exports = CharacterModel;
