const mongoose = require("mongoose");
const User = mongoose.model("User", {
  image: {
    type: String,
  },
  username: {
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
  panier: {
    type: Array,
  },
  prixTotal: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["admin", "user"],
  },
});

module.exports = User;
