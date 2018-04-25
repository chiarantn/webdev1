const express = require('express');
const app = express();
let counter = 0;

app.get('/', function(req, res) {
    res.send(`You are visitor: ${counter}`);
    res.end();
});

app.get('/visit', function (req, res) {
    counter++;
    res.send(`You are visitor: ${counter}`);
    res.end();
    return counter;
});

app.get('/visit/:id', function (req, res) {
    counter = req.params.id;
    res.send(`Your visit counter successfully changed to: ${counter}`);
    res.end();
    return counter;
});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});