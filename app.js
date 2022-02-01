//jshint esversion:6
import fetch from "node-fetch";
import express from "express";
import kg from 'body-parser';
const { urlencoded } = kg;
const app = express();
app.set('view engine', 'ejs');

app.use(urlencoded({extended: true}));
app.use(express.static("public"));

const apikey = "apiKey=058e988e042c4f4ca743c89e062c56cc";
const ps = "pageSize=8";
const sbp = "sortBy=popularity";
const cn = "country=in";
const lng = "language=en";

app.get("/", function(req, res){
  var cv = "category=technology";
  var url = "https://newsapi.org/v2/top-headlines?"+lng+"&"+ps+"&"+cv+"&"+sbp+"&"+apikey;
  fetch(url)
    .then(res => res.json())
    .then(data => res.render("home", {
      posts: data.articles
    }))
});

app.get("/entertainment", function(req, res){
  var cv = "category=entertainment";
  var url = "https://newsapi.org/v2/top-headlines?"+lng+"&"+cn+"&"+ps+"&"+cv+"&"+sbp+"&"+apikey;
  fetch(url)
    .then(res => res.json())
    .then(data => res.render("entertainment", {
      posts: data.articles
  }))
});

app.get("/sports", function(req, res){
  var cv = "category=sports";
  var url = "https://newsapi.org/v2/top-headlines?"+cn+"&"+ps+"&"+cv+"&"+sbp+"&"+apikey;
  fetch(url)
    .then(res => res.json())
    .then(data => res.render("sports", {
      posts: data.articles
  }))
});

app.get("/science", function(req, res){
  var cv = "category=science";
  var url = "https://newsapi.org/v2/top-headlines?"+lng+"&"+ps+"&"+cv+"&"+sbp+"&"+apikey;
  fetch(url)
    .then(res => res.json())
    .then(data => res.render("sports", {
      posts: data.articles
  }))
});

app.get("/health", function(req, res){
  var cv = "category=health";
  var url = "https://newsapi.org/v2/top-headlines?"+lng+"&"+ps+"&"+cv+"&"+sbp+"&"+apikey;
  fetch(url)
    .then(res => res.json())
    .then(data => res.render("health", {
      posts: data.articles
  }))
});

app.get("/business", function(req, res){
  var cv = "category=business";
  var url = "https://newsapi.org/v2/top-headlines?"+lng+"&"+ps+"&"+cv+"&"+sbp+"&"+apikey;
  fetch(url)
    .then(res => res.json())
    .then(data => res.render("business", {
      posts: data.articles
  }))
});


app.listen(process.env.PORT || 3000 , function () {
  console.log("port 3000 activated...");
});
