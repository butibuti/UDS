const express = require('express');
const path = require('path');
const cool = require('cool-ascii-faces') ;
const layouts = require("express-ejs-layouts");
const pageController=require("./controllers/PagesController")
const PORT = process.env.PORT || 5000;

var app= express().use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',pageController.home);
app.get('/game',pageController.game);
app.get('/cool', (req, res) => res.send(cool()));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));