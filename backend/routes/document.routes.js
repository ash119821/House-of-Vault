const express = require("express");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");
const multer = require("multer");
const {
  uploadDocument,
  getDocuments,
} = require("../controllers/document.controller");

const router = express.Router();

/* ---------- Multer Config ---------- */

// allowed file types
const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, JPG, PNG files are allowed"), false);
  }
};

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
  fileFilter,
});

/* ---------- Routes ---------- */

router.post(
  "/upload",
  auth,
  role("admin"),
  upload.single("file"),
  uploadDocument
);

router.get("/", auth, getDocuments);

module.exports = router;