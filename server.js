var express = require('express');
var app = express();
var path = require('path');

//Look for statics first
app.use(express.static(path.join(__dirname, '')));
//Return the index for any other GET request
app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '')});
});
app.listen(8080, function(){
    console.log((new Date()) + " Server is listening on port 8080");
});   