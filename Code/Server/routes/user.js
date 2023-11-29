const express = require('express');
const router = express.Router();

require('../db/connection');
const User = require("../models/Users");

router.post('/user_signUp', (req, res) => {
    const { fullName, email, phoneNumber, password, city, address } = req.body;

    if (!fullName || !email || !phoneNumber || !password || !city || !address) {
        return res.status(422).json({ error: "Please fill in all fields properly" });
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "User already exists" });
            }

            const user = new User({ fullName, email, phoneNumber, password, city, address });

            user.save()
                .then(() => {
                    res.status(201).json({ message: "User registered successfully" });
                })
                .catch((error) => {
                    res.status(500).json({ error: "Failed to register" });
                    console.log(error);
                });
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
