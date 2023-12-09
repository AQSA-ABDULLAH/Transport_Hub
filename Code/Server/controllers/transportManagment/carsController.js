const mongoose = require("mongoose");
const Cars = require("../../models/Cars");

class CarsController {
    static addCars = async (req, res) => {
        try {
            const {
                carImage, carTitle, carType, numberOfSeats, transmission, bags, mileLimit,
                price, color, fuelType, engineType, zone, discount, startDate, endDate
            } = req.body;

            if (!carImage || !carTitle || !carType || !numberOfSeats || !transmission ||
                !bags || !mileLimit || !price || !color || !fuelType ||
                !engineType || !zone || !discount || !startDate || !endDate) {
                return res.status(400).send({ status: "failed", message: "Incomplete data provided" });
            }

            const newCar = new Cars({
                carImage, carTitle, carType, numberOfSeats, transmission, bags, mileLimit,
                price, color, fuelType, engineType, zone, discount, startDate, endDate
            });

            await newCar.save();

            res.status(201).send({ status: "success", message: "Car saved successfully", data: newCar });
        } catch (error) {
            console.error(error);
            res.status(500).send({ status: "failed", message: "Internal Server Error" });
        }
    };
}

module.exports = CarsController;
