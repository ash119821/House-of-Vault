const mongoose = require("mongoose");

const emergencySchema = new mongoose.Schema({
  name: String,
  phone: String,
  relation: String,
  familyId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("EmergencyContact", emergencySchema);