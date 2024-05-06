const express = require('express');
const { TransporterController } = require('../controllers/transporter/transporterRegistrationController');
const transporterLogin = require('../controllers/transporter/transporterLoginController'); // Corrected spelling
const router = express.Router();
require("../db/connection")

router.post("/registration", TransporterController.transporterRegistration);
router.post("/verify-otp", TransporterController.verifyOTP)
router.post('/signIn', transporterLogin);

module.exports = router;

