const { Schema, default: mongoose } = require("mongoose");

const otpSchema = new Schema({
  otp: {
    type: String,
  },
  email: {
    type: String,
  },
  u_id: {
    type: String,
  },
});

const otpModel = mongoose.model("otp", otpSchema);
module.exports = otpModel;
