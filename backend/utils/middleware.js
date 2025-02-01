const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

const userExtractor = async (req, res, next) => {
  const token = req.get("authorization")?.replace("Bearer ", "");
  if (token) {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = await User.findById(decoded.id);
  }
  next();
};

const unknownEndpoint = (req, res, next) => {
  res.json({ error: "unknown endpoint" });
};

module.exports = {
  userExtractor,
  unknownEndpoint,
};
