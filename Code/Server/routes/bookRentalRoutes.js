const express = require('express');
const { RentalBookingController } = require('../controllers/rentalBooking/RentalBooking');
const router = express.Router();
require("../db/connection");

// Define the POST route for booking a rental
router.post("/book-rental", RentalBookingController.rentalBooking);

module.exports = router;
