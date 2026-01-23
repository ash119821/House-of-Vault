require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const multer = require("multer");

const authRoutes = require("./routes/auth.routes");
const familyRoutes = require("./routes/family.routes");
const documentRoutes = require("./routes/document.routes");
const medicalRoutes = require("./routes/medical.routes");
const emergencyRoutes = require("./routes/emergency.routes");
const noteRoutes = require("./routes/note.routes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/family", familyRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/medical", medicalRoutes);
app.use("/api/emergency", emergencyRoutes);
app.use("/api/notes", noteRoutes);
app.use((err, req, res, next) => {
  if(err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message });
  }
  if(err) {
    return res.status(400).json({ error: err.message });
  }
  next();
});
app.get("/", (req, res) => {
  res.send("FamVault backend is running");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);