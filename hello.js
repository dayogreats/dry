
// add dependencies
var express = require('express');
var app = express();

// root route
app.get('/', function(req, res) {
  res.type('text/plain');
  res.send('i am a beautiful butterfly');
});

 //server listening
app.listen(9000);
