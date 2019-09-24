var express = require("express");
var path = require("path")
var mongoose = require("mongoose");
const axios = require("axios")

// Initialize Express
var app = express();
var PORT = process.env.PORT || 3001;

// if (process.env.NODE_ENV === "production"){
//   app.use(express.static("client/build"))
// }



// Require all models
var db = require("./models");



// Configure middleware

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));


// Connect to the Mongo DB
mongoose
.connect("mongodb://heroku_wgm3zdxc:j7fhgljrj8e6hvkec30vlv99v8@ds051595.mlab.com:51595/heroku_wgm3zdxc", { useNewUrlParser: true });


//Routes
require("./routes/api/albums")(app)

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
}

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
