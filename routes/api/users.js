module.exports = function (app) {
    const express = require("express");
    const db = require("../../models");
    const axios = require("axios");
    const passport = require('passport');
    const bcrypt = require('bcryptjs');
    const jwt = require('jsonwebtoken');
    const keys = require('../../config/keys')

    app.get("/users/test", passport.authenticate('jwt', { session: false }), (req, res) => {
        res.json({
            msg: "users routes works!"
        });
    });




    //Create new user POST ROUTE

    app.post('/api/user', (req, res) => {
        db.User.findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    return res.status(400).json({
                        email: 'This email already exists'
                    });
                } else {
                    const newUser = {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: req.body.password,
                        bio: req.body.bio,
                        phoneNumber: req.body.phoneNumber,
                        address: req.body.address,
                        age: req.body.age,
                        school: req.body.school,
                    }

                    bcrypt.genSalt(10, (err, salt) =>{
                        bcrypt.hash(newUser.password, salt, (err, hash) =>{
                            // if (err) throw err;
                            newUser.password = hash;

                            db.User.create(newUser)
                            .then(user => {
                                res.status(200).json({
                                    message: "User account successfully created.",
                                    userCreated: true
                                })
                            })
                            .catch(err => console.log(err))
                        })
                    })
                }
            })
    })











}