const express = require('express');
const { UserController } = require('../controllers/users/userRegistration'); 
const { userLogin, google } = require('../controllers/users/userLogin');  // Adjust this line
const router = express.Router();
require("../db/connection")

// PUBLIC ROUTES
router.post("/user_signUp", UserController.userRegistration);
router.post("/user_signIn", userLogin);
router.post("/google", google);

module.exports = router;


