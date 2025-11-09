import Review from "../models/Review.js";

// Create new review
export const createReview = async (req, res) => {
  try {
    const { name, email, rating, feedback } = req.body;
    const photo = req.file ? `/uploads/${req.file.filename}` : null;

    const newReview = new Review({ name, email, rating, feedback, photo });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).json({ message: "Error adding review", error });
  }
};

// Get all reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};
