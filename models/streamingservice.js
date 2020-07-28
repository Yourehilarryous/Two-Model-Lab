const mongoose = require("mongoose")
const Schema = mongoose.Schema

const streamingServiceSchema = {
    name: {type: String, required: true},
    ceo: {type: String, required: true},
    shows: {type: String}
}

const StreamingService = mongoose.model("StreamingService", streamingServiceSchema)

module.exports = StreamingService