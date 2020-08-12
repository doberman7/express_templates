const port = 3000
  express = require ("express"),
  app = express(),
  chalkAnimation = require('chalk-Animation')
  homeController = require("./controllers/homeController.js")

//use for template ejs
app.set("view engine", "ejs")

//set port to the environment variable..
//..PORT value or 3000 if the former value is undefined
app.set("port", process.env.PORT || 3000);

//This route runs when a request is made to the /name path; then it calls the respondWithName function in the home controller
respondWithName: app.get("/name", homeController.respondWithName);

app.listen(port ,() => {
  chalkAnimation.rainbow(`Server running at http://localhost:${ app.get("port") }`)
});
