require("dotenv").config();
require("./config/mongodb.js");

const express = require("express");
const app = express();
const hbs = require("hbs");
const { set } = require("mongoose");

app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs")


const users = [
  { name: "toto", email: "toto@iron.com", favoriteLanguage: "Javascript" },
  { name: "lolo", email: "lolo@iron.com", favoriteLanguage: "Javascript" },
  { name: "titi", email: "titi@iron.com", favoriteLanguage: "Javascript" },
];

const images = ["/img/one.jpeg", "/img/two.jpeg", "/img/three.jpeg"];

app.get("/", (req, res) => {
  res.render("home", images);
})

app.get("/add-new-ironhacker", (req, res) => {
  res.render("formU");
})

app.get("/my-dev-squad", (req, res) => {
  res.render("allUsers", users);
})

app.get("/api/ironhackers", (req, res) => {
  res.json(users);
})



app.listen(process.env.PORT,()=>{console.log(`welcome @http://localhost:${process.env.PORT}`)})
