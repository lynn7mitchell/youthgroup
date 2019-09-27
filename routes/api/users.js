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

    app.post('/api/users', (req, res) => {
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
                    console.log(newUser)
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
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


    // LOGIN

    app.post('/api/users/login', (req, res) => {
        const { email, password } = req.body;

        db.User.findOne({ email: email })
            .then(user => {
                if (!user) {
                    return res.status(404).json({ user: "User not found" })
                }
                // let currentUser = user.get()
                // TypeError: Cannot read property 'replace' of undefined
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (isMatch) {
                            db.User.findOne({ id: user.__id })
                                .then(user => {
                                    const payload = {
                                        id: user.id,
                                        email: user.email,
                                        firstName: user.firstName,
                                        lastName: user.lastName
                                    }
                                    jwt.sign(
                                        payload,
                                        keys.secretOrKey,
                                        { expiresIn: 3600 * 12 },
                                        (err, token) => {
                                            res.json({
                                                ...payload,
                                                success: true,
                                                token: `Bearer ${token}`
                                                // GOOD FOR 12 HOURS
                                            });
                                        }
                                    )

                                }).catch(err => console.log(err))
                        } else {
                            return res.status(400).json({
                                password: 'User password could not be validated'
                            })
                        }
                    }).catch(err => console.log(err))

            }).catch(err => console.log(err));


  
    })
}