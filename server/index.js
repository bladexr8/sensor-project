const express = require('express');

const app = express();

// temperature route
app.get('/temperature', function(req, res) {
    res.send('24 ˚C');
});

// humidity route
app.get('/humidity', function(req, res) {
    res.send('48%');
});

// start the server
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});