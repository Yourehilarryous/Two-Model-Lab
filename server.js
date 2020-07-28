const express = require("express")
const app = express()
require('./db/db') 
const Show = require("./models/netflix")

app.use(express.urlencoded({ extended: false }))

//show route
app.get("/:id", (req, res) => {
    Show.findById(req.params.id, (err, foundShow) => {
    // res.send("This works")
    })
})

// create route
app.get("/new", (req, res) => {
    res.render("new.ejs")
})

//index route
app.get("/", (req, res) => {

    Show.find({}, (err, allShows) => {
        res.render("home.ejs", {
            shows: allShows
        })
    })

    
})


//post route
app.post("/create", (req, res) => {
    Show.create(req.body, (err, newShow) => {
        res.redirect("/")
    })
})




app.listen(3000, () => {
    console.log("I'm in")
})

