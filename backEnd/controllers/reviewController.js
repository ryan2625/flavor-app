const Review = require('../models/review');

/**
 * Review Controller
 *
 */

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({createdAt: -1});
    res.status(200).json(reviews);
  } catch (error) {
    throw error;
  }
};

const createReviews = async (req, res) => {
    try{
        const review = await Review.create(req.body);
        res.status(200).json(review);
    } catch( error) {
        throw error;
    }
}

module.exports = {
  getReviews,
  createReviews
};
