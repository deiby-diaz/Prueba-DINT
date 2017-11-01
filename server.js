var express = require('express');
<<<<<<< HEAD
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// use port 3000 unless there exists a preconfigured port
var port = process.env.port || 3000;

app.listen(port);
=======
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
>>>>>>> 37af2fa703aee7956f33dc2325eac30d960d48d4
