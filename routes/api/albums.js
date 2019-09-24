module.exports = function(app) {
    const express = require("express");
    const db = require("../../models");
    const axios = require("axios");
  
    app.get("/albumstest", (req, res) => {
      res.json({
        msg: "albums routes works!"
      });
    });




  
    app.get("/api/albums", (req, res) => {
     
    });
  
    app.post("/api/albums", (req, res) => {
      
    });

    app.put("/api/album", (req, res) => {

      });



  };

  