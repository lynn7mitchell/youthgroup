var express = require("express");
var path = require("path")
var mongoose = require("mongoose");
const axios = require("axios")
const path = require('path')
require('dotenv').config()
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


// passport middleware
app.use(passport.initialize());

// passport config
require ('./config/passport')(passport)

// Connect to the Mongo DB
mongoose
.connect("mongodb://heroku_vh4g6z2z:ag71nkrrbijsd9fnqcogam2slm@ds211268.mlab.com:11268/heroku_vh4g6z2z", { useNewUrlParser: true });


//Routes
require("./routes/api/albums")(app)
require("./routes/api/events")(app)

if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
}

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
