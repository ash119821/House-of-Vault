const express = require("express");
const auth = require("../middleware/auth.middleware");
const {
  addNote,
  getNotes,
} = require("../controllers/note.controller");

const router = express.Router();

router.post("/", auth, addNote);
router.get("/", auth, getNotes);

module.exports = router;