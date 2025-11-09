import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  rating: { type: Number, required: true, min: 1, max: 5 },
  feedback: { type: String, required: true },
  photo: { type: String }, // file path or URL
  date: { type: Date, default: Date.now },
});

export default mongoose.model("Review", reviewSchema);
