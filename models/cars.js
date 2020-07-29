const mongoose = require("mongoose")
const Schema = mongoose.Schema


const carSchema = {
	make: String,
	model: String,
	year: String,
	color: String,
	image: String
}



const Car = mongoose.model("Car", carSchema)
module.exports = Car