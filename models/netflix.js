const mongoose = require("mongoose")
const Schema = mongoose.Schema

const netflixSchema = {
    show: {type: String, required: true},
}

const Netflix = mongoose.model("Netflix", netflixSchema)

module.exports = Netflix