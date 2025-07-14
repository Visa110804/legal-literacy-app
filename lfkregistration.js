const mysql = require("mysql");
const express = require("express");

const app = express();

const connection = mysql.createConnection({
    host: "locahost",
    user: "root",
    password: "",
    database: "test"
});

//connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("Connected to the database Successfully!")
});


app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});


// set app port
app.listen(4500);