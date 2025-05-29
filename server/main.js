const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Change to match your frontend origin
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure this directory exists
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // e.g., .png or .jpg
    const base = path.basename(file.originalname, ext); // original filename without extension
    const timestamp = new Date().toISOString().replace(/[-:.]/g, ""); // compact datetime
    cb(null, `${base}_${timestamp}${ext}`);
  },
});

const upload = multer({ storage });

app.post("/user", upload.single("file"), (req, res) => {
  console.log("Received form data:", req.body);
  console.log("Saved file as:", req.file.filename);
  res.json({ status: "success", file: req.file.filename });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
