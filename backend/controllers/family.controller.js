const User = require("../models/User");
const Family = require("../models/Family");

// GET family members (dashboard basic info)
exports.getMembers = async (req, res) => {
  const users = await User.find(
    { familyId: req.user.familyId },
    "name bloodGroup contactNumber role"
  );
  res.json(users);
};

// Join existing family
exports.joinFamily = async (req, res) => {
  const { familyId } = req.body;

  const family = await Family.findById(familyId);
  if (!family) return res.status(404).json({ error: "Family not found" });

  await User.findByIdAndUpdate(req.user.id, {
    familyId,
    role: "member",
  });

  res.json({ message: "Joined family successfully" });
};