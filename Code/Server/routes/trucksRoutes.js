const express = require('express');
const router = express.Router();
const TrucksController = require("../controllers/transportManagment/truckController");

// ROUTES
router.post('/addCar', CarsController.addCars);
// router.get("/getCars", CarsController.getCars);
// router.get("/getCar/:id", CarsController.getCar);
// router.delete("/deleteCar/:id", CarsController.deletecar);
// router.patch("/updateCar/:id", CarsController.updateCar);

module.exports = router;