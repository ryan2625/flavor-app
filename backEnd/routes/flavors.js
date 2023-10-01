const express = require('express');
const readStream = require('../parseCsv/process');
const {
    getFlavors,
    getCategories,
    getFlavorsByCategory
} = require('../controllers/flavorController');

/**
 * Flavor Routes
 *
 * This file holds the flavor routes, including three GET requests to retrieve data for the navbar and
 *  flavors/flavorsCategory pages and one POST request for sending CSV data to the database.
 * 
 */

const router = express.Router();

router.get('/', getFlavors);
router.get('/categories', getCategories);
router.get('/:category', getFlavorsByCategory);

// A single POST request for a one-time data entry of all the CSV to JSON data
router.post('/', readStream);

module.exports = router;