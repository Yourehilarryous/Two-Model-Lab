const express = require('express');
const router = express.Router();
const Service = require("../models/streamingservice")


//index route
router.get("/", (req, res) => {

    Service.find({}, (err, allServices) => {
        res.render("streaming/home.ejs", {
            services: allServices
        })
    })
})

// create route
router.get("/new", (req, res) => {
    res.render("streaming/new.ejs")
})



//post route
router.post("/create", (req, res) => {
    Service.create(req.body, (err, newService) => {
        console.log(newService)
        res.redirect("/")
    })
})

//Service route
router.get("/:id", (req, res) => {
    Service.findById(req.params.id, (err, foundService) => {
        res.render("streaming/show.ejs", {
            service: foundService
        })
    })
})

//delete route
router.delete("/:id", (req, res) => {
    Service.findByIdAndRemove(req.params.id, (err) => {
        console.log(err)
        res.redirect("/")
    })
} )


//edit toute
router.get("/:id/edit", (req, res) =>{
    Service.findById(req.params.id, (err, foundService) => {
        res.render("streaming/edit.ejs", {
            service: foundService
        })
    })
})

// put route
router.put("/:id", (req, res) => {
    Service.findByIdAndUpdate(req.params.id, req.body, (err, updatedService) => {
        if (err) console.log("It didn't work", err)

        res.redirect("/")
    })
})

module.exports = router;