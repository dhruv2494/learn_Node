const express = require("express");
const {
  registerUser,
  loginUser,
  verifyUser,
} = require("../controller/authController");
const verifyToken = require("../middlewares/authentication");

const authRoute = express.Router();

const {
  nameValidation,
  numberValidation,
  emailValidation,
  passwordValidation,
} = require("../utils/validation");

authRoute.post(
  "/register",
  [
    ...nameValidation,
    ...numberValidation,
    ...emailValidation,
    ...passwordValidation,
  ],
  registerUser
);
authRoute.post(
  "/login",
  [...emailValidation, ...passwordValidation],
  loginUser
);
authRoute.post("/verify-user", verifyToken, verifyUser);

module.exports = authRoute;
