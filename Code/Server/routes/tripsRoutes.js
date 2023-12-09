const express = require('express');
const TripsController = require('../controllers/tripsManagment/tripController.js');

const router = express.Router();

// PROTECTED ROUTES
router.post("/addTrip", TripsController.addTrips); // Fix the method name here

module.exports = router;