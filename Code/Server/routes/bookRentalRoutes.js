const express = require('express');
const { RentalBookingController } = require('../controllers/rentalBooking/RentalBooking');
const router = express.Router();
const path = require('path');
const multer = require('multer');
require("../db/connection");

const storage = multer.diskStorage({
    destination: (cb) => {
        cb(null)
    },
    filename: (file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
  });

  const upload = multer({ storage: storage })

// Define the POST route for booking a rental
router.post("/book-rental", upload.single('carImage'), RentalBookingController.rentalBooking);
router.get("/get-book-rental", RentalBookingController.getRentalBooking);
router.get("/get-book-rental/:id", RentalBookingController.getRentalBooking);
// router.delete("/deleteCar/:id", CarsController.deletecar);
// router.patch("/updateCar/:id", CarsController.updateCar);

module.exports = router;
 