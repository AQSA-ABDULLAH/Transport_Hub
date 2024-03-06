const express = require('express');
const SliderController = require("../controllers/slider/sliderController");
const router = express.Router();

//PROTECTED ROUTES
router.post("/create-slider", SliderController.createSlider);
router.get("/get-slider/:id", SliderController.getSlider);
router.patch("/update-slider/:id", SliderController.updateSlider);
router.delete("/delete-slider/:id", SliderController.deleteSlider);

//PUBLIC ROUTES
router.get("/get-slider", SliderController.getSliderAll);


module.exports = router;