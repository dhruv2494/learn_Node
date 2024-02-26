const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    default: "Anonymous",
  },
  email: {
    type: String,
    default: "default@mail.com",
  },
  m_number: {
    type: Number,
  },
  password: {
    type: String,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
