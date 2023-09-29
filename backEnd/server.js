const express = require("express")
require("dotenv").config()
const flavorRoutes = require("./routes/flavors")
const mongoose = require("mongoose")
const app = express()

app.use("/api/flavors", flavorRoutes)

mongoose.connect(process.env.MONGO_URI).then(app.listen(process.env.PORT, () => {
    console.log("Server runninasdasdg on port 4000 and mongoose is connected")
    }
)).catch(err => console.log(err))