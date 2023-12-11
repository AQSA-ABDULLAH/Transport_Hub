const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const CarsController = require("../controllers/transportManagment/carsController.js");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/carRental/")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
  });

  const upload = multer({ storage: storage })

// PROTECTED ROUTES
router.post('/addCar', upload.single('carImage'), CarsController.addCars);
router.get("/getCar/:id", CarsController.getCar);

//PUBLIC ROUTES
router.get("/getCars", CarsController.getCars);

module.exports = router;


// const isAuthenticated = require("../middlewares/auth-middleware.js");
// Route Level Middleware - To Protect Route
// router.post("/addCar", isAuthenticated, CarsController.addCars)