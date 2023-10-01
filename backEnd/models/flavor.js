const mongoose = require('mongoose');

/**
 * Flavor Model
 *
 * This module defines the Mongoose schema and model for storing flavor information in the database.
 * 
 */

const Schema = mongoose.Schema;

const flavorSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  flavorName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Flavor', flavorSchema);
