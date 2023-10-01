const Quote = require('../models/quote');

/**
 * Quote Controller
 *
 * This module provides a controller function for saving quotes in the database. It is used to 
 * make a POST request.
 * 
 */

const saveQuote = async (req, res) => {
  try {
    const quote = await Quote.create(req.body);
    res.status(200).json(quote);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveQuote,
};
