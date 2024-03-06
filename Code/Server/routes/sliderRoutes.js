import express from "express";
import SliderController from "../controllers/slider/sliderController.js";
import isAuthenticated from "../middlewares/auth-middleware.js";
const router = express.Router();

// Route Level Middleware - To Protect Route
router.use("/create-slider", isAuthenticated);
router.use("/get-slider/:id", isAuthenticated);
router.use("/update-slider/:id", isAuthenticated);
router.use("/delete-slider/:id", isAuthenticated);

//PROTECTED ROUTES
router.post("/create-slider", SliderController.createSlider);
router.get("/get-slider/:id", SliderController.getSlider);
router.patch("/update-slider/:id", SliderController.updateSlider);
router.delete("/delete-slider/:id", SliderController.deleteSlider);

//PUBLIC ROUTES
router.get("/get-slider", SliderController.getSliderAll);


export default router;