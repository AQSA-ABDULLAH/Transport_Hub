const express = require('express');
const {TransporterController} = require('../controllers/transporter/transporterRegistrationController');
const tranporterLogin = require('../controllers/transporter/transporterLoginController');
const router = express.Router();
require("../db/connection")

router.post("/registration", TransporterController.transporterRegistration);
router.post('/signIn', tranporterLogin);

module.exports = router;