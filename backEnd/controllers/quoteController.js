const Quote = require("../models/quote")

const saveQuote = async(req, res) => {
    try {
    const quote = await Quote.create(req.body)
    res.status(200).json(quote)
} catch (error) {
    throw error;
  }
}

module.exports = {
    saveQuote
}