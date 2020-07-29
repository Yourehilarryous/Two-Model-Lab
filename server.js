const express = require("express")
const app = express()
const mongoose = require("mongoose")
require('./db/db') 
const methodOverride = require("method-override")
const Service = require("./models/streamingservice")

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride("_method")); 


const streamingService = require("./routes/streamingservice.js")
app.use("/streaming", streamingService)

const cars = require("./routes/cars.js")
app.use("/cars", cars)



app.listen(3000, () => {
    console.log("I'm in")
})

module.exports = app;