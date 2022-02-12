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
var multer = require("multer");
var imgModel = require("./models/imageModel");

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

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });
app.get("/", (req, res) => {
  imgModel.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error occurred", err);
    } else {
      res.json({ items: items });
    }
  });
});
// Step 8 - the POST handler for processing the uploaded file

app.post("/", upload.single("image"), (req, res, next) => {
  var obj = {
    name: req.body.name,
    desc: req.body.desc,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };
  imgModel.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      // item.save();
      res.redirect("/");
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
