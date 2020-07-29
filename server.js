const express = require("express")
const app = express()
require('./db/db') 
const methodOverride = require("method-override")
const Service = require("./models/streamingservice")

app.use(express.urlencoded({ extended: false }))

app.use(methodOverride("_method")); 

//index route
app.get("/", (req, res) => {

    Service.find({}, (err, allServices) => {
        res.render("home.ejs", {
            services: allServices
        })
    })
})

// create route
app.get("/new", (req, res) => {
    res.render("new.ejs")
})



//post route
app.post("/create", (req, res) => {
    Service.create(req.body, (err, newService) => {
        console.log(newService)
        res.redirect("/")
    })
})

//Service route
app.get("/:id", (req, res) => {
    Service.findById(req.params.id, (err, foundService) => {
        res.render("show.ejs", {
            service: foundService
        })
    })
})

//delete route
app.delete("/:id", (req, res) => {
    Service.findByIdAndRemove(req.params.id, (err) => {
        console.log(err)
        res.redirect("/")
    })
} )


//edit toute
app.get("/:id/edit", (req, res) =>{
    Service.findById(req.params.id, (err, foundService) => {
        res.render("edit.ejs", {
            service: foundService
        })
    })
})

// put route
app.put("/:id", (req, res) => {
    Service.findByIdAndUpdate(req.params.id, req.body, (err, updatedService) => {
        if (err) console.log("It didn't work", err)

        res.redirect("/")
    })
})

app.listen(3000, () => {
    console.log("I'm in")
})

