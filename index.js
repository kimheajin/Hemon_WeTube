var express = require('express');
var app = express();

const POST = 4000;

function handleListen(){
    console.log("Listening on : http://localhost:4000");
}

function handleHome(req, res){
    console.log(req);
    res.send("Hello from home");
}

function handleProfile(req, res){
    res.send("yoou are on my profile");
}

app.get("/", handleHome);

app.get("/profile",handleProfile);

app.listen(POST, handleListen);