const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const SliderController = require("../controllers/slider/sliderController");

const storage = multer.diskStorage({
    destination: (cb) => {
        cb(null)
    },
    filename: (file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
  });

  const upload = multer({ storage: storage })

//PROTECTED ROUTES
router.post("/create-slider", upload.single('carImage'), SliderController.createSlider);
// router.get("/get-slider/:id", SliderController.getSlider);
// router.patch("/update-slider/:id", SliderController.updateSlider);
// router.delete("/delete-slider/:id", SliderController.deleteSlider);

// //PUBLIC ROUTES
// router.get("/get-slider", SliderController.getSliderAll);


module.exports = router;