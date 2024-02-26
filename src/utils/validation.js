const { body } = require("express-validator");

const emailValidation = [
  body("email")
    .notEmpty()
    .withMessage("email cannot be empty")
    .isEmail()
    .withMessage("Invalid Email Formate"),
];

const idValidation = [body("id").notEmpty().withMessage("id cannot be empty")];

const nameValidation = [
  body("name").notEmpty().withMessage("name cannot be empty"),
];

const numberValidation = [
  body("number")
    .notEmpty()
    .withMessage("number cannot be empty")
    .isNumeric()
    .withMessage("number is always in digit"),
];

const otpValidation = [
  body("otp").notEmpty().withMessage("name cannot be empty"),
];
const passwordValidation = [
  body("password")
    .notEmpty()
    .withMessage("name cannot be empty")
    .isLength({ min: 6 })
    .withMessage("Password has minimum 6 Character"),
];

module.exports = {
  emailValidation,
  idValidation,
  nameValidation,
  numberValidation,
  otpValidation,
  passwordValidation,
};
