const mongoose = require("mongoose");
const conection = async () => {
  try {
    const res = await mongoose.connect(
      "mongodb+srv://ehudk011:ZCFzVC48HNXHmqBU@israelheart2heartpomclu.syf8wjl.mongodb.net/?retryWrites=true&w=majority",
      //"mongodb+srv://shyam:xHCUDGVAIxwq8HEe@cluster0.kz38oq1.mongodb.net/360Security?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = conection;
