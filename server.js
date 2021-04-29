const express = require("express")
const ser = express()
const todoRoutes = require('./routes/todos')

ser.use(express.json())
ser.use(express.urlencoded({extended : true}))

ser.get('/hello', (req, res) => {
    res.send("Hello")
})

ser.use('/public', express.static( __dirname + "/public"))
ser.use('/todos' , todoRoutes)

ser.listen(4456, () => {
    console.log("Server Started at http://localhost:4456")
})