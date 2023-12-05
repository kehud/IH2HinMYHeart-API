const mongoose = require("mongoose");

const videoListSchema = new mongoose.Schema({
  VideoID: Number,
  Title: String,
  FullDescription: String,
  Duration: Number,
  VideoLink: String  
  });

const VideoList = mongoose.model("videoList", videoListSchema, "videoList");

module.exports = VideoList;