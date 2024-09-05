const express = require('express')
const path = require('path')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.render('index')
});


//dynamic routing 

app.get('/profile/:username', (req, res) => {
    username = req.params.username;
    res.send('Welcome ' + username);

})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

