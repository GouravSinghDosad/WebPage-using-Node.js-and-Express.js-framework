
const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());     // Handles the JSON(API req) data
app.use(express.urlencoded({extended:true})); // handles the data from html forms

app.use(express.static(path.join(__dirname,'public'))); // this will tell express to serve static files(css,images,javascript files) from public folder

app.set('view engine', 'ejs');   // tell express to use EJS as templete engine to render dynamic HTML pages
                                 

app.get("/", function(req,res){
    res.render("index", {Document: `Apna Doc's`});  // this part  will render the index.ejs page inside views folder
})     

app.get("/profile/:username", (req,res) => {  // first we searched a url in browser http:localhost:3000/profile/gourav, but didn't get so we created this url
    res.send(req.params.username);
})

// so if anyone type this url, only the /gourav this part changes according to every user, the /profile this part remains same for everyone, it never changes, now we will make this url DYNAMIC

//so to make this route dynamic do this /profile/:gourav, instead of gourav it can be anything you want , it's just a variable now and /profile/: this part is fixed, so type any username after this part, this route will open

// i changed /profile/:gourav to /profile/:username

// the line req.params.username  , username was the variable so everybody will write according to them , and params.username will access that username

// res.send(req.params.username)  will send there username as response to them

app.get("/help/:username/:age", (req,res) => {
    res.send(`${req.params.username} of age ${req.params.age} needs help`);
})


app.listen(3000, ()=>{
    console.log("http://localhost:3000");
})

