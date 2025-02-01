const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const middleware = require("./utils/middleware");
const cors = require("cors");
const notesRouter = require("./controllers/notes");
const loginRouter = require("./controllers/login");
const usersRouter = require("./controllers/users");

const DbConnect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("connected to the DB");
};
DbConnect();

app.use(express.json());
app.use(middleware.userExtractor);
app.use(cors());
app.use("/login", loginRouter);
app.use("/notes", notesRouter);
app.use("/users", usersRouter);

app.use(middleware.unknownEndpoint);

module.exports = app;
