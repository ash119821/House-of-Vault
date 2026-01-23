const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  passwordHash: String,
  role: { type: String, enum: ["admin", "member"] },
  bloodGroup: String,
  contactNumber: String,
  familyId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("User", userSchema);