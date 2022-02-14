const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.uwiiy.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const characterRouter = require("./routes");
var imgModel = require("./models/imageModel");
const CharacterModel = require("./models/characterModel");
const imageUrlList = require("./logic");

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/character", characterRouter);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.log(`the error is ${e}`);
  });

// app.post("/", async (req, res) => {
//   const { name, bio } = req.body;
//   const rawData = fs.readFileSync(
//     `./data/scrapedData/${name.split(" ")?.join("_")}.json`,
//     {
//       encoding: "utf8",
//       flag: "r",
//     }
//   );
//   const data = await JSON.parse(rawData);
//   let avatarUrl;
//   let portraitUrl;
//   imageUrlList.forEach((char) => {
//     if (char.name === name) {
//       avatarUrl = char.avatarUrl;
//       portraitUrl = char.portraitUrl;
//     }
//   });
//   const charObj = {
//     name: data.name,
//     details: {
//       Defense: data["Defense:"],
//       Guts: data["Guts:"],
//       Prejump: data["Prejump:"],
//       Backdash: data["Backdash:"],
//       Weight: data["Weight:"],
//     },
//     bio: bio,
//     moveSet: data.moveSet,
//     avatarImageUrl: avatarUrl,
//     portraitImageUrl: portraitUrl,
//   };
//   CharacterModel.create(charObj, (err, item) => {
//     if (err) {
//       console.log(err);
//     } else {
//       // item.save();
//       res.redirect("/");
//     }
//   });
// });

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
