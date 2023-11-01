const express = require("express")
const { getReviews, createReviews } = require("../controllers/reviewController")

const router =  express.Router()

/*Routes to create a new review and retrieve all reviews in the database*/

router.post("/", createReviews)
router.get("/", getReviews)

module.exports = router