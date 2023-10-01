const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const flavorRoutes = require('./routes/flavors');
const quoteRoutes = require('./routes/quotes');

/**
 * Server Configuration and Routes
 *
 * This file holds middleware and different routes that our server will use. It also connects to the MongoDB database.
 * 
 */

dotenv.config();

// Enable JSON request body parsing
app.use(express.json());

// Configure CORS headers so we can allow frontend on port 3000 to access our port 4000 backend
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/api/flavors', flavorRoutes);
app.use('/api/quote', quoteRoutes);

// Connect to the MongoDB database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT, 'and MongoDB is connected.');
        });
    })
    .catch((err) => console.log(err));
