const CharacterModel = require("../models/characterModel");

const addEntireMoveList = async (req, res) => {
  const { name, moveSet } = req.body;
  const characterWithData = await CharacterModel.insertMany({
    name,
    moveSet,
  });
  res.json({ characterWithData });
};

const addNewCharacter = async (req, res) => {
  const { name } = req.params;
  const newChar = await CharacterModel.insertMany({ name });
  res.json({ newChar });
};

const getCharacter = async (req, res) => {
  const { id } = req.params;
  const newChar = await CharacterModel.findById(id);
  res.json({ newChar });
};

const getAllCharacters = async (req, res) => {
  const allChars = await CharacterModel.find();
  res.json({ allChars });
};

module.exports = {
  addEntireMoveList,
  addNewCharacter,
  getCharacter,
  getAllCharacters,
};
