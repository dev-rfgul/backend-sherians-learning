const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    fs.readdir("./files", (err, files) => {
        res.render("index", { files: files });
        console.log(files)
    });
});
app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, (err) => {
        (err) ? console.log(err) : res.redirect('/')
    })
})
// app.get('/file/:filename', function (req, res) {
//     fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
//         console.log(filedata.details)
//     })
// })

app.get('/file/:filename', function (req, res) {
    const filepath = path.join(__dirname, 'files', req.params.filename); // Ensure the correct path
    fs.readFile(filepath, "utf-8", function (err, filedata) {
        if (err) {
            res.status(404).send('File not found'); // Handle error
        } else {
            res.render("show",  {filename:req.params.filename, filedata:filedata})
        }
    });
});
app.get('/edit/:filename', function (req, res) {
    const filepath = path.join(__dirname, 'files', req.params.filename); // Ensure the correct path
    fs.readFile(filepath, "utf-8", function (err, filedata) {
        if (err) {
            res.status(404).send('File not found'); // Handle error
        } else {
            // res.render("show",  {filename:req.params.filename, filedata:filedata})
        res.render("edit",{filename:req.params.filename, filedata:filedata})
        }
    });
});

app.post("/edit",(req,res)=>{
    console.log(req.body)
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`,(err)=>{
        res.redirect("/")
    })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


