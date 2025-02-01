require("dotenv").config();
const jwt = require("jsonwebtoken");
const loginRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

loginRouter.post("/", async (request, response) => {
  if (!request.user) {
    const { username, password } = request.body;
    const user = await User.findOne({ username });
    if (await bcrypt.compare(password, user.passwordHash)) {
      const token = jwt.sign({ id: user._id, username }, process.env.SECRET);
      response.status(200).send(token);
    } else {
      response.status(401).send({ error: "invalid username or password" });
    }
  } else {
    response.status(200).send({ message: "user already logged in" });
  }
});

module.exports = loginRouter;
