const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: String,
  passwordHash: String,
  name: String,
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    },
  ],
});

userSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    delete ret.passwordHash;
  },
});

module.exports = mongoose.model("User", userSchema);
