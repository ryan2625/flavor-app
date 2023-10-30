const mongoose = require('mongoose');

/**
 * Review Model
 *
 * This module defines the Mongoose schema and model for storing review information in the database.
 * 
 */

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('Review', reviewSchema);