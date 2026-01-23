const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  addMedical,
  getMedical,
} = require("../controllers/medical.controller");

const router = express.Router();

router.post("/", auth, addMedical);
router.get("/", auth, getMedical);

module.exports = router;