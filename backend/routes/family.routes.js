const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  getMembers,
  joinFamily,
} = require("../controllers/family.controller");

const router = express.Router();

router.get("/members", auth, getMembers);
router.post("/join", auth, joinFamily);

module.exports = router;