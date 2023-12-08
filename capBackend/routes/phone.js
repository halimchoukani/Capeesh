const express = require("express");
const router = express.Router();
const multer = require("multer");
const Phone = require("../models/phone");
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

router.post("/add", upload.any("image"), (req, res) => {
  let data = req.body;
  phone = new Phone(data);
  phone.image = filename;
  phone
    .save()
    .then((saved) => {
      filename = "";
      res.status(200).send(saved);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/store", (req, res) => {
  Phone.find({})
    .then((phones) => {
      res.status(200).send(phones);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/getbyid/:id", (req, res) => {
  let id = req.params.id;
  Phone.findOne({ _id: id })
    .then((phones) => {
      res.status(200).send(phones);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  Phone.findByIdAndDelete({ _id: id })
    .then((phones) => {
      res.status(200).send(phones);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
router.put("/update/:id", upload.any("image"), (req, res) => {
  let id = req.params.id;
  let data = req.body;
  if (filename != "") {
    data.image = filename;
  }
  Phone.findByIdAndUpdate({ _id: id }, data)
    .then((phones) => {
      filename = "";
      res.status(200).send(phones);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
