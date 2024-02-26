const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIl_AUTH_USER,
    pass: process.env.MAIl_AUTH_PASS,
  },
});
module.exports = { transporter };
