const jwt = require("jsonwebtoken");
const user = require("../models/user");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided!" });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    let a = await user.findById(decoded.userId);
    if (a !== null) {
      req.userId = decoded.userId;
      next();
    } else {
      return res
        .status(404)
        .send({
          message: "You Are Not User",
          err: "Provided Token User Is Not On Database",
        });
    }
  });
};

module.exports = verifyToken;
