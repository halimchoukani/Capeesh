const express = require("express");
phoneApi = require("./routes/phone");
userApi = require("./routes/user");
const cors = require("cors");
require("./config/connect");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/phone", phoneApi);
app.use("/user", userApi);
app.use("/getimage", express.static("./uploads"));
app.listen(3000, () => {
  console.log("Server Work !!!");
});
