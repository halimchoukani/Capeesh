const mongoose = require("mongoose");
const User = mongoose.model("User", {
  name: {
    type: String,
  },
  lastname: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  status: {
    type: String,
  },
  image: {
    type: String,
  },
  panier: {
    type: Array,
  },
});

module.exports = User;
