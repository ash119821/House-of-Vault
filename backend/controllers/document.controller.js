const Document = require("../models/Document");

/**
 * Upload a document
 */
exports.uploadDocument = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "File is required" });
    }

    const { title, type } = req.body;

    if (!title || !type) {
      return res.status(400).json({ error: "Title and type are required" });
    }

    const doc = await Document.create({
      title,
      type,
      filePath: req.file.path,
      familyId: req.user.familyId,
      uploadedBy: req.user._id,
    });

    res.status(201).json({
      message: "Document uploaded",
      document: doc,
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get all documents for logged-in user's family
 */
exports.getDocuments = async (req, res, next) => {
  try {
    const documents = await Document.find({
      familyId: req.user.familyId,
    }).sort({ createdAt: -1 });

    res.json(documents);
  } catch (err) {
    next(err);
  }
};