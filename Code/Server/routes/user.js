const express = require('express');
const { UserController } = require('../controllers/users/userRegistration'); 
const userLogin = require('../controllers/users/userLogin');  // Adjust this line
const router = express.Router();
require("../db/connection")

router.post("/user_signUp", UserController.userRegistration);
router.post("/user_signIn", userLogin);

module.exports = router;

