const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  title: String,
  type: String, // Aadhar, PAN, Insurance
  filePath: String,
  familyId: mongoose.Schema.Types.ObjectId,
  uploadedBy: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Document", documentSchema);