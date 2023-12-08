const mongoose = require("mongoose");
const Brand = mongoose.model("brand", {
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  products: {
    type: Array,
  },
});

module.exports = Brand;
