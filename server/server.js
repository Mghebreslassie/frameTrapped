const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv").config();
const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.uwiiy.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const characterRouter = require("./routes");

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

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
