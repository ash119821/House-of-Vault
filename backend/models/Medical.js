const mongoose = require("mongoose");

const medicalSchema = new mongoose.Schema({
  condition: String,
  details: String,
  familyId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Medical", medicalSchema);