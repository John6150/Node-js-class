const express = require("express")
// use require to import files. Express is a JS framework, comes in form of an object, easy to use and minimal.
const app = express()
const ejs = require("ejs")
// ejs means embedded javascript. Allows you to write  HTML and js inside it
app.set("view engine", "ejs")
// this sets your ejs as view 
app.use(express.urlencoded({ extended: true }))


let ar = []




// to create a server, use listen function. 8000 is the port number

app.listen(8000, () => {
    // port in use, and server starts
    //  console.log("app started");
})

//  install nodemon  package for automatic restart of server when file changes
// packages installed are saved into  the "package.json" file under dependencies

app.get('/', (req, res) => {
    // get takes two arguments request and response
    // req is an object that contains information about incoming request like headers , body etc
    // res is an object that allows you to send data back to client
    // we can set status code using .

    // res.send([
    //     {
    //         name: "John", class: "Node"
    //     },
    //     {
    //         name: "Tof", class: "Reasct"
    //     }
    // ])
    res.sendFile(__dirname + "/index.html")
    // console.log(__dirname);
    res.render('index', { name: "John", gender: "male", ar: ar })
})

app.post('/post', (req, res) => {
    // console.log(req.body);
    const { name, email } = req.body /* this is deconstructing in node js */
    ar.push({ name, email })
    console.log(ar);
    res.redirect('/')
    // console.log();
})
app.post('/delete/:index', (req, res) => {
    const { index } = req.params.index
    ar.splice(index, 1)
    res.redirect('/')
})
app.get('/edit/:index', (req, res) => {
    const { index } = req.params.index
   
})