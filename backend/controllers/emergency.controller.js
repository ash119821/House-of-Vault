const EmergencyContact = require("../models/EmergencyContact");

exports.addContact = async (req, res) => {
  const contact = new EmergencyContact({
    ...req.body,
    familyId: req.user.familyId,
  });

  await contact.save();
  res.json({ message: "Emergency contact added" });
};

exports.getContacts = async (req, res) => {
  const contacts = await EmergencyContact.find({
    familyId: req.user.familyId,
  });
  res.json(contacts);
};