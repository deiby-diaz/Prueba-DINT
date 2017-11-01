var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

// Listen for set port
app.listen(app.get('port'), (err)=> {
    if(err){
        console.log("Error starting server");
        console.log(err);
        return
    }

    console.log("Server listening on port : "+app.get('port'));
});