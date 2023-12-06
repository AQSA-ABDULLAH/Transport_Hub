import express from "express";
import CarController from "../controllers/transportManagment/carsController.js";
import isAuthenticated from "../middlewares/auth-middleware.js";
const router = express.Router();

// Route Level Middleware - To Protect Route
router.use("/create-trainer", isAuthenticated);

//PROTECTED ROUTES
router.post("/create-trainer", CarController.createTrainer);
// router.get("/get-trainer/:id", CarController.getTrainer);
// router.patch("/update-trainer/:id", CarController.updateTrainer);
// router.delete("/delete-trainer/:id", CarController.deleteTrainer);


export default router;