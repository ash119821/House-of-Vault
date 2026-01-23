const mongoose = require("mongoose");

const familySchema = new mongoose.Schema({
  familyName: String,
  createdBy: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Family", familySchema);