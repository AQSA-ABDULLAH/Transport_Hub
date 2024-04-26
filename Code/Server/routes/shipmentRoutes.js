const express = require('express');
const { ShipmentController } = require('../controllers/good-shipment/ShipmentController');
const router = express.Router();
require("../db/connection");


// Define the POST route for booking a rental
router.post("/book-shipment", ShipmentController.shipment);
router.get("/get-shipment", ShipmentController.getShipment );
router.get("/get-shipment/:id", ShipmentController.getAllShipments);
// router.delete("/deleteCar/:id", CarsController.deletecar);
// router.patch("/updateCar/:id", CarsController.updateCar);

module.exports = router;