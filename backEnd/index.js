const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const flavorRoutes = require('./routes/flavors');
const quoteRoutes = require('./routes/quotes');
const reviewRoutes = require('./routes/review');
const cors = require('cors');

/**
 * Server Configuration and Routes
 *
 * This file holds middleware and different routes that our server will use. It also connects to the MongoDB database.
 * 
 */

dotenv.config();

// Enable JSON request body parsing
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "true");
});

app.use('/api/flavors', flavorRoutes);
app.use('/api/quote', quoteRoutes);
app.use("/api/reviews", reviewRoutes)

// Connect to the MongoDB database
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server is running on port', process.env.PORT, 'and MongoDB is connected.');
        });
    })
    .catch((err) => console.log(err));
