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

// ROUTES
router.post('/addCar', upload.single('carImage'), CarsController.addCars);
router.get("/getCars", CarsController.getCars);
router.get("/getCar/:id", CarsController.getCar);
router.delete("/deleteCar/:id", CarsController.deletecar);
router.patch("/updateCar/:id", CarsController.updateCar);

module.exports = router;