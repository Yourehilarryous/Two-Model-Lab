const express = require("express")
const app = express()
require('./db/db') 
const Service = require("./models/streamingservice")

app.use(express.urlencoded({ extended: false }))



// create route
app.get("/new", (req, res) => {
    res.render("new.ejs")
})

//index route
app.get("/", (req, res) => {

    Service.find({}, (err, allServices) => {
        res.render("home.ejs", {
            services: allServices
        })
    })
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



app.listen(3000, () => {
    console.log("I'm in")
})

