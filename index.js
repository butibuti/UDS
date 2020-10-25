const express = require('express');
const path = require('path');
const cool = require('cool-ascii-faces') ;
const layouts = require("express-ejs-layouts");
const pageController=require("./controllers/PagesController")
const bodyParser = require('body-parser');
const { Op } = require("sequelize");

const db = require("./models/index");
const PORT = process.env.PORT || 5000;

var app= express().use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',pageController.home);
app.get('/game',pageController.game("UDS"));
app.get('/cool',pageController.cool(cool));

async function SetScore (req, res) {
    
  var ranks=await db.Score.findAll( 
    {
      where: {
      value: {
        [Op.gt]: req.body.score
      }
    }
  });

  var firstScore;
  if(ranks.length==0){
    firstScore=req.body.score;
  }else{
    firstScore= await db.Score.max("value");
  }

  db.Score.create({
    value: req.body.score,
  }).then(() => {
      
    res.send(ranks.length+1+","+firstScore);
  });
}

app.post("/score",SetScore);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));