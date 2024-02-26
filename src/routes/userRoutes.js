const express = require("express");
const {
  getUser,
  updateUser,
  deleteUser,
  getAllUser,
} = require("../controller/userController");

const userRoute = express.Router();
const { emailValidation, idValidation } = require("../utils/validation");

userRoute.get("/get-all-user", getAllUser);

userRoute.post("/get-user", emailValidation, getUser);

userRoute.post("/update-user", idValidation, updateUser);

userRoute.delete("/delete-user", idValidation, deleteUser);

module.exports = userRoute;
