const express = require("express")
const {saveQuote} = require("../controllers/quoteController")

const router =  express.Router()

/*A simple route to post the get a quote data to the database. Retrieving not needed*/

router.post("/", saveQuote)

module.exports = router