const express = require('express');
const router = express.Router();
const Car = require("../models/cars")

//Get page to post new car
router.get("/new", (req, res) => {
	res.render("cars/new.ejs")
})

//Get home page
router.get("/", (req, res) => {
	Car.find({}, (err, allCars)=> {
		if (err) console.log(err)
		res.render("cars/home.ejs", {cars : allCars})
	})
})



router.post("/", (req, res) => {
	Car.create(req.body, (err, createdCar) => {
		if(err){
			console.log(err)
		} else {
			res.redirect("/cars")
		}
	})
	
})


module.exports = router