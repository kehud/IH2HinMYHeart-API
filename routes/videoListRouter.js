const express = require("express");
const {
  getVideoList,
} = require("../controllers/videoListController");

const getVideoListRoutes = express.Router();

//get video list
getVideoListRoutes.route("/getVideoList").get(getVideoList);

module.exports = getVideoListRoutes;
