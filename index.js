//Faker is used to generate a fake name on home.ejs whenver the site is loaded

var express = require("express");
var faker = require("faker");
var app = express();

app.use(express.static("css"));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('view engine', 'hbs');

var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus

app.listen(process.env.PORT || 3000, function(){
  console.log("Server is up and running");
});


app.get('/', function(req, res){
    res.render('home.ejs', {randomName: randomName});
    console.log(randomName);
});


app.get('/home', function(req, res){
  res.render('home.ejs', {randomName: randomName});
});


app.get('/abstraction', function(req, res){
  res.render('abstraction.ejs');
});


app.get('/types', function(req, res){
  res.render('types.ejs');
});


app.get('/references', function(req, res){
  res.render('references.ejs');
});


app.get("*", function(req, res){
  res.render("error.ejs");
});
