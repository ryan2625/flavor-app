const express = require("express")
const { getReviews, createReviews } = require("../controllers/reviewController")

const router =  express.Router()

/*A simple route to post the get a quote data to the database. Retrieving not needed*/

router.post("/", createReviews)
router.get("/", getReviews)

module.exports = router