const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  addContact,
  getContacts,
} = require("../controllers/emergency.controller");

const router = express.Router();

router.post("/", auth, addContact);
router.get("/", auth, getContacts);

module.exports = router;