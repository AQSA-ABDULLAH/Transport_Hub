const express = require('express');
const multer = require('multer');
const TripsController = require('../controllers/tripsManagment/tripController.js');
const router = express.Router();
const isAdmin = require('../middlewares/isAdmin-middleware.js');
const path = require('path');
const { TripBookingController } = require('../controllers/Booking/TripBooking.js');
// PROTECTED ROUTES

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/trips")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
  });
  
  
  const upload = multer({ storage: storage });
router.post('/addTrip' ,upload.single('images') , TripsController.addTrips);
  
  

router.get("/TripPackages", TripsController.getAllTrips); // Fix the method name here
router.get("/tripDetails/:id", TripsController.getTripById); // Fix the method name here
router.put("/updatePackage/:id", TripsController.updateTripById); // Fix the method name here
router.delete("/deletePackage/:id", TripsController.deleteTripById); // Fix the method name here
router.get('/Trip_Booking_Form/:id',TripBookingController.getTripBooking );
router.post('/submit-a-new-trip-booking-form',TripBookingController.tripBooking ); 
router.delete('/delete-trip-booking',TripBookingController.deleteTripBooking ); 
router.post('/create-checkout-session',TripBookingController.makePayment ); 

module.exports = router;
