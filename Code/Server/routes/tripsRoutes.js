const express = require('express');
const TripsController = require('../controllers/tripsManagment/tripController.js');

const router = express.Router();

// PROTECTED ROUTES
router.post("/TripPackages", TripsController.getAllTrips); // Fix the method name here
router.post("/addTrip", TripsController.addTrips); // Fix the method name here
router.post("/tripDetails/:id", TripsController.getTripById); // Fix the method name here
router.post("/updatePackage/:id", TripsController.updateTripById); // Fix the method name here
router.post("/deletePackage/:id", TripsController.deleteTripById); // Fix the method name here

module.exports = router;