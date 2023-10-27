const mongoose = require('mongoose');

/**
 * Quote Model
 *
 * This module defines the Mongoose schema and model for storing quote information in the database.
 * 
 */

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  capability: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  updates: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Review', reviewSchema);