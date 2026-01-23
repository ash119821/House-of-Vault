const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Family = require("../models/Family");

exports.register = async (req, res) => {
  try {
    const { name, email, password, bloodGroup, contactNumber } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ error: "User exists" });

    const passwordHash = await bcrypt.hash(password, 10);

    const family = await Family.create({
      familyName: `${name}'s Family`,
    });

    const user = await User.create({
      name,
      email,
      passwordHash,
      bloodGroup,
      contactNumber,
      role: "admin",
      familyId: family._id,
    });

    res.json({ message: "Registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        familyId: user.familyId,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
