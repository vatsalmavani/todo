const notesRouter = require("express").Router();
const Note = require("../models/note");
const User = require("../models/user");

notesRouter.get("/", async (request, response) => {
  if (request.user) {
    const notes = await Note.find({ user: request.user.id });
    response.json(notes);
  } else {
    response.status(401).send({ error: "user not logged in" });
  }
});

notesRouter.post("/", async (request, response) => {
  if (request.user) {
    const content = request.body.content;
    const note = new Note({ content, user: request.user.id });
    const savedNote = await note.save();
    const user = await User.findById(request.user.id);
    user.notes = user.notes.concat(savedNote._id);
    await user.save();
    response.status(201).end();
  } else {
    request.status(401).send({ error: "user not logged in" });
  }
});

module.exports = notesRouter;
