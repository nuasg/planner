var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authenticationController = require("./server/controller/authentication.controller");

mongoose.connect("mongodb://node:node@ds053784.mongolab.com:53784/prereqsmap");

app.use(bodyParser.json());
app.use('/app',express.static(__dirname + "/app"));
app.use('/node_modules',express.static(__dirname + "/node_modules"));

app.get('/', function(req,res){
	res.sendFile(__dirname + "/index.html");
});

// Authentication
app.post("/api/user/signup", authenticationController.signup);

app.listen('3000', function(){
	console.log("Listening on port 3000...");
});