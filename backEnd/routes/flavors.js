const express = require("express")

const router =  express.Router()

router.get("/", (req, res) =>{
    res.json({mssg:"GET ALL FLAVORS"})
})

router.get("/categories", (req, res) =>{           
    res.json({mssg:"GET ALL CATEGORIES"})
})

router.get("/:category", (req, res) =>{
    res.json({mssg:"FLAVORS IN CATEGORY"})
}
)
module.exports = router