const mongoose = require("mongoose");
const Phone = mongoose.model("Phone", {
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
  },
  color: {
    type: Array,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  promo: {
    type: Boolean,
  },
  promoPrice: {
    type: Number,
  },
  qte: {
    type: Number,
  },
});

module.exports = Phone;
