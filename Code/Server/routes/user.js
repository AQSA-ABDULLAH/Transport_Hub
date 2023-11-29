const express = require('express');
const { UserController } = require('../controllers/users/userControllers'); // Change the import to use named import
const router = express.Router();

router.post("/user_signUp", UserController.userRegistration);
module.exports = router;
