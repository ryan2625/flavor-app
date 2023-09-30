const express = require("express")
const readStream = require("../flavorsInfo/process")

const {
    getFlavors,
    getCategories,
    getFlavorsByCategory
} = require("../controllers/flavorController")

const router =  express.Router()

router.get("/", getFlavors)

router.get("/categories", getCategories)

router.get("/:category", getFlavorsByCategory)

router.post("/", readStream)

module.exports = router