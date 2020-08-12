"use strict";

const port = 3000,
  express = require ("express"),
  app = express(),
  homeController = require("./controllers/homeController.js"),
  chalkAnimation = require('chalk-Animation');


//set port to the environment variable..
//..PORT value or 3000 if the former value is undefined
app.set("port", process.env.PORT || 3000);

//use for template ejs
app.set("view engine", "ejs");

//This route runs when a request is made to the /name path; then it calls the respondWithName function in the home controller
app.get("/name/:myName", homeController.respondWithName);

app.listen(port ,() => {
  chalkAnimation.rainbow(`Server running at http://localhost:${ app.get("port") }`);
});
