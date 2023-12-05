const videoListModel = require("../models/videoListModel");

const getVideoList = async (request, response) => {
  const VideoList = await videoListModel.find();
  console.log("get video list");
  try {
    response.send(VideoList);
  } catch (error) {
    response.status(500).send(error);
  }
};

module.exports = { 
  getVideoList,
};