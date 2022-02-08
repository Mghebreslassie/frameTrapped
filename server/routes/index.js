const express = require("express");
const router = express.Router();
const {
  addEntireMoveList,
  addNewCharacter,
  getCharacter,
  getAllCharacters,
} = require("../controllers/index");

router.post("/addMoveSet", addEntireMoveList);
router.post("/addNew", addNewCharacter);
router.get("/getCharacter/:id", getCharacter);
router.get("/getAllCharacters", getAllCharacters);

module.exports = router;
