const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

const ImageModel = mongoose.model("image", ImageSchema);
module.exports = ImageModel;
