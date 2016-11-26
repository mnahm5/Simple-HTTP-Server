var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function (req, res) {
    var people = [
        {
            firstName: "John",
            lastName: "Doe",
            age: 34,
            gender: "male"
        },
        {
            firstName: "Tom",
            lastName: "Jackson",
            age: 27,
            gender: "male"
        },
        {
            firstName: "Tracy",
            lastName: "Smith",
            age: 34,
            gender: "female"
        }
    ];
    res.json(people);
});

app.get('/download', function (req, res) {
     res.download(path.join(__dirname, '/downloads/Scholarship.pdf'));
});

app.get('/about', function (req, res) {
    res.redirect('/about.html');
});

app.post('/subscribe', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    console.log(name + ' has subscribed with ' + email);
});

app.listen(4000, function () {
    console.log('Server Started on port 4000');
});