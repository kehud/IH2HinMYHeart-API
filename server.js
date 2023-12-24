const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var cors = require("cors");

const getVideoLIst = require("./routes/videoListRouter.js");
const conection = require("./database/index.js");

const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./swagger/swagger.js');
const swaggerSpec = require('./swagger/swagger.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get("/", (_, res) => {
  res.send("Connected");
});
app.use(getVideoLIst);

app.listen(4000, async () => {
  await conection();

  console.log("Server is running at 4000");
});

module.exports =app;
