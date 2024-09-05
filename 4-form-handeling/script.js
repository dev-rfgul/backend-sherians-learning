const express = require('express');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/login', (req, res) => {
    console.log(req.body)
    res.send('Login Successful')
})
app.get('/user/:id', (req, res) => {
    console.log(req.params)
    res.send('User ID: ' + req.params.id)
})
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})