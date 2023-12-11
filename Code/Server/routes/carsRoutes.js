const express = require('express');
const CarsController = require("../controllers/transportManagment/carsController.js");
// const isAuthenticated = require("../middlewares/auth-middleware.js");
const router = express.Router();

const multer = require('multer');

const upload = multer({ dest: 'uploads/' })
router.post('/addCar', upload.single('carImage'), CarsController.addCars);


// Route Level Middleware - To Protect Route
// router.post("/addCar", isAuthenticated, CarsController.addCars)

// PROTECTED ROUTES

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "./Upload")
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
//   });


module.exports = router;
