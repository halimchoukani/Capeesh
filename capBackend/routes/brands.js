const express = require("express");

const router = express.Router();
const multer = require("multer");
const Brand = require("../models/brand");

filename = "";
const myStorage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    let date = Date.now();
    let fl = date + "." + file.mimetype.split("/")[1];
    filename = fl;
    cb(null, fl);
  },
});
const upload = multer({ storage: myStorage });

router.post("/addBrand", upload.any("image"), (req, res) => {
  let data = req.body;
  brand = new User(data);
  brand.image = filename;
  brand
    .save()
    .then((saved) => {
      filename = "";
      res.status(200).send(saved);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/allBrands", (req, res) => {
  Brand.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
router.delete("/deleteBrand/:id", upload.any("image"), (req, res) => {
  Brand.findByIdAndDelete(req.params.id)
    .then((brand) => {
      res.status(200).send(brand);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});
router.get("/getBrandById/:id", upload.any("image"), (req, res) => {
  Brand.findById(req.params.id)
    .then((brand) => {
      res.status(200).send(brand);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

module.exports = router;
