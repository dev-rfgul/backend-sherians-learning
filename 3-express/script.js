const express = require('express')

const app = express()

// this is how a middleware is used.
// every request that comes to the server will pass through this middleware and we can perform any function here before the request reaches the route and once the task is finished we will call the next() other wise the request will not be forwareded.
app.use((req, res, next) => {
    console.log("This is a middleware on line 8 ")
    next();
})

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.get('/students', (req, res) => {
    res.send(" This is Students Page")
})

app.get("/coach", (req, res) => {
    res.send("This is Coach page")
})

app.get("/error", (req,res,next)=>{
    return next(new Error("This is an error"))
})
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something broke")
})
app.listen(3000)