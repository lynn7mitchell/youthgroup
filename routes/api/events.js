module.exports = function(app) {
    const express = require("express");
    const db = require("../../models");
    const axios = require("axios");
  
    // Test works in postman
    app.get("/eventstest", (req, res) => {
      res.json({
        msg: "events routes works!"
      });
    });




  
    app.get("/api/events", (req, res) => {
    
    });
  
    app.post("/api/events", (req, res) => {
      
    });

    app.put("/api/events", (req, res) => {

      });



  };

  