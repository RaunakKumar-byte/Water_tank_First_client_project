import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { createReview, getReviews } from "../controllers/reviewController.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads/")),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, "_")),
});
const upload = multer({ storage });

// Routes
router.post("/", upload.single("photo"), createReview);
router.get("/", getReviews);

export default router;
