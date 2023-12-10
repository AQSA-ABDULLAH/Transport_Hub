const express = require('express');
const CarsController = require("../controllers/transportManagment/carsController.js");
// const isAuthenticated = require("../middlewares/auth-middleware.js");
const router = express.Router();
const path = require('path');
const multer = require('multer');

// Route Level Middleware - To Protect Route
// router.post("/addCar", isAuthenticated, CarsController.addCars)

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
router.post('/addCar',upload.single('image') , CarsController.addCars);


module.exports = router;
