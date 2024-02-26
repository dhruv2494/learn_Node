const user = require("../models/user");
const { validationResult } = require("express-validator");

const getUser = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(403).send({ errors: result.array() });
    } else {
      let a = await user.find({ email: req.body.email });
      if (a[0] !== undefined) {
        res.send(a);
      } else {
        res.send("User Not Found");
      }
    }
  } catch (e) {
    res.send(e);
  }
};
const updateUser = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(403).send({ errors: result.array() });
    } else {
      let a = await user.findByIdAndUpdate(req.body.id, {
        $set: { ...req.body, updated_at: new Date().toLocaleString() },
      });
      res.status(200).send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};
const deleteUser = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(403).send({ errors: result.array() });
    } else {
      let a = await user.findByIdAndDelete(req.body.id);
      res.send(a);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};
const getAllUser = async (req, res) => {
  try {
    let a = await user.find();
    res.status(200).send(a);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
};
