const express = require("express")
const {saveQuote} = require("../controllers/quoteController")

const router =  express.Router()

router.post("/", saveQuote)

module.exports = router