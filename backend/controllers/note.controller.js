const Note = require("../models/Note");

exports.addNote = async (req, res) => {
  const note = new Note({
    ...req.body,
    familyId: req.user.familyId,
  });

  await note.save();
  res.json({ message: "Note added" });
};

exports.getNotes = async (req, res) => {
  const notes = await Note.find({ familyId: req.user.familyId });
  res.json(notes);
};