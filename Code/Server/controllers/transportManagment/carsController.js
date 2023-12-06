import mongoose from "mongoose";
import Cars from "../../models/Cars";

class CarsController {
    static addCars = async (req, res) => {
        const { image, nameAndModel, type, seats, transmission, bags, mileLimit, price, color, fuelType,
            engineType, zone, discount, startDate, endDate } = req.body;

        if (!image, !nameAndModel, !type, !seats, !transmission, !bags, !mileLimit, !price, !color,
            !fuelType, !engineType, !zone) return res.send({ status: "failed", message: `Name, is required` });

        try {
            const newTrainer = new TrainerModal({
                image, nameAndModel, type, seats, transmission, bags, mileLimit,
                price, color, fuelType, engineType, zone, discount, startDate, endDate
            });
            await newTrainer.save();

            res.status(201).send({ status: "success", message: "Trainer saved successfully", data: newTrainer });
        } catch (error) {
            console.log(error);
            res.status(409).send({ status: failed, message: "Failed to Save" });
        }
    };

};

export default CarsController;