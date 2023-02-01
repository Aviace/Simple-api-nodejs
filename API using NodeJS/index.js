//console.log("here i am") will be printed after writing "npm start" on terminal

const express = require("express")
const app = express()

const port = 9000

//CRUD = create, read, update, delete
//HTTP = POST, GET, PUT/PATCH, DELETE
// '/' in url = endpoint
// mongoose is a javascript library

const dogs = [
    {
        name: "Jimbob", 
        breed: "Husky"
    },
    {
        name: "Sam",
        breed: "lab"
    }
]

app.get("/", (req, res) => {
    res.json(dogs)
})

app.get("/dogs/:id", (req, res) => {
    res.json(dogs[req.params.id - 1])  //arr[i]-1 //localhost:9000/dogs/1 --> 1-1=0 --> dogs[0] is printed on page as response
})

app.post("/dogs/:id", (req, res) => {
    console.log(req.body)  //requested body printed in console
    res.json({ message: "okay" }) //body is printed shows in json on page response as okay
})

app.put("/dogs/:id", (req, res) => {
    console.log(req.params.id)  //requested id printed in console
    console.log(req.body)  //requested body printed in console
    res.json(app.post("/dogs/:id", (req, res) => {
        console.log(req.body)  //requested body printed in console
        res.json({ message: `updated dog ${req.params.id}` }) //body is printed shows in json on page response as id
    }))
})

app.delete("/dogs/:id", (req, res) => {
    console.log(req.params.id)  //requested id printed in console
    res.json({ message: `deleted dog ${req.params.id}` })
})

app.listen(port, () => {
    console.log("listening to port", port)
})

