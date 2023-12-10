const express = require('express');
const multer = require('multer');
const TripsController = require('../controllers/tripsManagment/tripController.js');
const router = express.Router();
const path = require('path');
// PROTECTED ROUTES

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/Upload")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
  });
  
  
  const upload = multer({ storage: storage });
router.post('/submit-a-new-Trip-package',upload.single('images') , TripsController.addTrips);
  
  

router.get("/TripPackages", TripsController.getAllTrips); // Fix the method name here
// router.post("/addTrip", TripsController.addTrips); // Fix the method name here
router.get("/tripDetails/:id", TripsController.getTripById); // Fix the method name here
router.put("/updatePackage/:id", TripsController.updateTripById); // Fix the method name here
router.delete("/deletePackage/:id", TripsController.deleteTripById); // Fix the method name here

module.exports = router;