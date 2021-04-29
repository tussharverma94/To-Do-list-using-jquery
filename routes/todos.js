// const { json } = require("express")

const route = require("express").Router()

let todos = []

route.get('/', (req, res) =>{
    res.send(todos)
    // res.send("<h1>hello</h1>")
})

route.post('/', (req, res) => {
    todos.push({
        task : req.body.task
    })
    console.log(todos)
    res.send(todos)
    // res.send("<h1>hello</h1>")
})

module.exports = route