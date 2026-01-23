const Medical = require("../models/Medical");

exports.addMedical = async (req, res) => {
  const medical = new Medical({
    ...req.body,
    familyId: req.user.familyId,
  });

  await medical.save();
  res.json({ message: "Medical details added" });
};

exports.getMedical = async (req, res) => {
  const data = await Medical.find({ familyId: req.user.familyId });
  res.json(data);
};