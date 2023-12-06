const express = require('express');
const CarsController = require("../controllers/transportManagment/carsController.js");
const isAuthenticated = require("../middlewares/auth-middleware.js");
const router = express.Router();

// Route Level Middleware - To Protect Route
router.use("/addCars", isAuthenticated);

// PROTECTED ROUTES
router.post("/addCars", CarsController.addCars); // Fix the method name here

module.exports = router;
