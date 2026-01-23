const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  content: String,
  isReminder: Boolean,
  familyId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Note", noteSchema);