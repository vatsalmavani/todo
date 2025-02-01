const User = require("../models/user");
const usersRouter = require("express").Router();
const bcrypt = require("bcrypt");

usersRouter.post("/", async (request, response) => {
  const { username, password, name } = request.body;
  const passwordHash = await bcrypt.hash(password, 10);
  const user = new User({ username, passwordHash, name });
  await user.save();
  response.status(201).end();
});

usersRouter.get("/", async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

module.exports = usersRouter;
