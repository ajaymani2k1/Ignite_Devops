const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).send("Server Working")
})

app.post("/greetings", (req, res)=>{
    res.status(200).json({ "message": `Hello ${req.body.name}, Greeting from Backend.` })
})

app.listen(3001, ()=>{
    console.log("Server running at port 3001 ...")
})