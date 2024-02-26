const user = require("../models/user");
const { validationResult } = require("express-validator");
const { transporter } = require("../services/mailServices");
const otpModel = require("../models/otpModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(403).send({ errors: result.array() });
    } else {
      const { name, email, number, password } = req.body;

      let c = await user.find({ email: email });
      if (c[0] === undefined) {
        const a = await user.create({
          name: name,
          email: email,
          m_number: number,
          password: password,
          created_at: new Date().toLocaleString(),
          updated_at: new Date().toLocaleString(),
        });

        // let digits = "0123456789";
        // let g_otp = "";
        // for (let i = 0; i < 6; i++) {
        //   g_otp += digits[Math.floor(Math.random() * 10)];
        // }
        // const b = await otpModel.create({
        //   otp: g_otp,
        //   email: email,
        //   u_id: a.id,
        // });

        // setTimeout(() => {
        //   otpModel.findByIdAndDelete(b._id);
        // }, 600000);
        // transporter.sendMail(
        //   {
        //     from: "oxfordamreli3@gmail.com",
        //     to: email,
        //     subject: "Verify User",
        //     text: `Your OTP for verification is ${g_otp}`,
        //   },
        //   function (error) {
        //     if (error) {
        //       console.log(error);
        //     }
        //   }
        // );

        res.status(201).send(a);
      } else {
        res.send("User Already Exit");
      }
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

const loginUser = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(403).send({ errors: result.array() });
    } else {
      let a = await user.find({ email: req.body.email });
      if (a[0] !== undefined) {
        if (a[0].password === req.body.password) {
          const token = jwt.sign(
            { userId: a[0]._id },
            process.env.JWT_SECRET_KEY
          );
          res.send({ token: token });
        } else {
          res.send("Invalid Password");
        }
      } else {
        res.send("User Not Found");
      }
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

const verifyUser = async (req, res) => {
  let a = await user.findById(req.userId);
  res.send(a);
};

const verifyOtp = async (req, res) => {
  try {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(403).send({ errors: result.array() });
    } else {
      let a = await otpModel.find({ email: req.body.email });
      if (a[0] !== undefined) {
        if (a[0].otp === req.body.otp) {
          await otpModel.findByIdAndDelete(a[0]._id);
          res.send("Verification SuccessFully");
        } else {
          res.send("Invalid OTP");
        }
      } else {
        res.send("other error");
      }
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = { registerUser, loginUser, verifyUser, verifyOtp };
