const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/capeesh")
  .then(() => {
    console.log("Connect to DB Success !!!");
  })
  .catch((err) => {
    console.log("Connect to DB Fail !!!");
    console.log(err);
  });

module.exports = mongoose;
