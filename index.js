const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/home", (req, res) => {
    res.render('home');
});

app.get("/contacto", (req, res) => {
    res.render('contacto');
});

app.get("/quienSomos", (req, res) => {
    res.render('quienSomos');
});

app.listen(3000);