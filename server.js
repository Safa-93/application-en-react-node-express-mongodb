const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//connection à la base de données
mongoose
  .connect("mongodb://localhost/db")
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while  db connecting");
    console.log(e);
  });

const app = express();

const urlencodedParser = bodyParser.urlencoded({
  extended: true,
});
app.use(urlencodedParser);
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//définition du routeur
const router = express.Router();
app.use("/user", router);
require(__dirname + "./controllers/userController.js")(router);

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
