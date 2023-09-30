const mongoose = require("mongoose")

const Schema = mongoose.Schema

const flavorSchema = new Schema({
    number : {
        type: Number,
        required: true
    },
    flavorName: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Flavor", flavorSchema)