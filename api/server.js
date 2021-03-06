const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require('body-parser');

mongoose
  .connect("mongodb://localhost/db", {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

const app = express();

const urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const router = express.Router();
app.use("/api/user", router);
require(__dirname + "/controllers/userController")(router);

app.use("/api/product", router);
require(__dirname + "/controllers/productController")(router);

const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));