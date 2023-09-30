const mongoose = require("mongoose")

const Schema = mongoose.Schema

const quoteSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    capability: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    updates: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Quote", quoteSchema)