const express = require('express');
const app = express();
const port = 3004;
const mysql = require("./conn").con;
app.use(express.static(__dirname + '/public'));
//config
app.set("view engine", "hbs");
app.set("views", "./view")

//Routing

app.get("/",(req,res) => {
    res.render("index")
});

//Create Server
app.listen(port, (err) =>  {
    if(err)
        throw err
    else 
        console.log("Server is running at %d:", port);    
}); 