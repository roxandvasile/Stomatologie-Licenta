let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/despre.html', function(req, res) {
    res.sendFile(__dirname + '/despre.html');
});

app.get('/echipa.html', function(req, res) {
    res.sendFile(__dirname + '/echipa.html');
});

app.get('/preturi.html', function(req, res) {
    res.sendFile(__dirname + '/preturi.html');
});

app.get('/galerie.html', function(req, res) {
    res.sendFile(__dirname + '/galerie.html');
});

app.get('/contact.html', function(req, res) {
    res.sendFile(__dirname + '/contact.html');
});

app.listen(4000, function() {
    console.log('Loading app port 4000');
});