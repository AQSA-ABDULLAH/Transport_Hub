const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const CarsController = require("../controllers/transportManagment/carsController.js");

const storage = multer.diskStorage({
    destination: (cb) => {
        cb(null)
    },
    filename: (file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
  });

  const upload = multer({ storage: storage })

// PROTECTED ROUTES
router.post('/addCar', upload.single('carImage'), CarsController.addCars);
router.get("/getCar/:id", CarsController.getCar);
router.delete("/deleteCar/:id", CarsController.deletecar);

//PUBLIC ROUTES
router.get("/getCars", CarsController.getCars);

module.exports = router;