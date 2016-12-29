// add dependencies
var express = require('express');
var bodyparser = require('body-parser');

//database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myappdatabase');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//intialize express app
var app = express();

//server listening
app.listen(3000);
 
