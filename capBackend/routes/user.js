const express = require("express");

const router = express.Router();
const multer = require("multer");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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

router.post("/registre", upload.any("image"), (req, res) => {
  let data = req.body;
  if (data.status == "admin") {
    User.findOne({ username: data.username }).then((user) => {
      if (user) {
        res.status(400).send("Username already exists");
      } else {
        user = new User(data);
        user.image = filename;
        salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(data.password, salt);

        user
          .save()
          .then((saved) => {
            filename = "";
            res.status(200).send(saved);
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      }
    });
  } else {
    User.findOne({ email: data.email }).then((user) => {
      if (user) {
        res.status(400).send("Email already exists");
      } else {
        user = new User(data);
        user.image = filename;
        salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(data.password, salt);

        user
          .save()
          .then((saved) => {
            filename = "";
            res.status(200).send(saved);
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      }
    });
  }
});

router.post("/addPanier/:id", upload.any("image"), (req, res) => {
  myid = req.params.id;
  User.findById(myid)
    .then((user) => {
      let data = req.body;
      user.panier.push(data);
      user.prixTotal = user.prixTotal + data.prix;
      user
        .save()
        .then((saved) => {
          res.status(200).send(saved);
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(404, err.message);
    });
});

router.post("/login", (req, res) => {
  let data = req.body;
  console.log(data);
  User.findOne({ email: data.email })
    .then((user) => {
      if (!user) {
        res.status(400).send("Email or Password incorrect");
        return;
      }
      let validPass = bcrypt.compareSync(data.password, user.password);
      console.log(validPass);

      if (!validPass) {
        res.status(400).send("Password incorrect");
        return;
      }
      let payload = {
        _id: user._id,
        email: user.email,
        fullname: user.name + " " + user.lastname,
      };
      let token = jwt.sign(payload, "123456789");
      res.status(200).send({ myToken: token });
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

router.get("/all", (req, res) => {
  User.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.delete("/delete/:id", upload.any("image"), (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

router.get("/getById/:id", upload.any("image"), (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
});

router.put("/update/:id", upload.any("image"), (req, res) => {
  let id = req.params.id;
  let data = req.body;
  if (filename != "") {
    data.image = filename;
  }
  if (data.password != "") {
    salt = bcrypt.genSaltSync(10);
    data.password = bcrypt.hashSync(data.password, salt);
  }
  User.findByIdAndUpdate({ _id: id }, data)
    .then((article) => {
      filename = "";
      res.status(200).send(article);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
