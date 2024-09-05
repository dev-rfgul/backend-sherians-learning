const fs = require('fs');


// this will create a file and insert the text in it 

// fs.writeFileSync('hello.txt', 'Hello from  Node.js!', function (err) {
// (err)?console.log(err):console.log("File created successfully");
// });


// this will append the file 


// fs.appendFile('hello.txt',"bahi ma to acha hoon ", function (err) {
//     (err)?console.log(err):console.log("File created successfully");
//     });


// this will change the name of the file 


// fs.rename("hewy.txt", 'hey.txt', function(err){
//     (err)?console.log(err):console.log("renamed successfully")
// })



// this will copy the file 

// fs.copyFile('hey.txt', './copy/copiedFile.txt', function(err){
//     (err)?console.log(err):console.log("copied successfully")
// })


// this will delete the file 

// fs.unlink('helloo.txt', function (err) {
//     (err) ? console.log(err) : console.log("deleted successfully")
// })


// this will delete a folder if recursive is given it will del teh whole folder and if not it will only del the empty folder.

// fs.rm('./copy', { recursive: true }, function (err) {
//     (err) ? console.log(err) : console.log("deleted successfully")
// })


//this will read file 

// fs.readFile('hey.txt', 'utf8', function (err, data) {
//     (err) ? console.log(err) : console.log(data)
// })




// ********************************** HTTP module starts from here************************************
// creating a server.

const http = require('http');
const server = http.createServer((req, res) => {
    res.write("Hello from Node.js");
    res.end();
})


server.listen(3000)
console.log("hello world i am fahad")