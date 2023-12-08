// const Car = require("../../models/Cars");

// const createCar = async (req, res) => {
//     const newCar = new Car(req.body)

//     try {
//         const savedCar = await newCar.save()
//         res.status(200).json({ success: true, message: "Successfully created", data: savedCar })
//     } catch (err) {
//         res.status(500).json({ success: false, message: "Failed to save" })
//     }
// }

// module.exports = {
//     createCar}




const mongoose = require("mongoose");
const Cars = require("../../models/Cars");

class CarsController {
    static addCars = async (req, res) => {
        try {
            const {
                carImage, carTitle, carType, numberOfSeats, bags, transmission, mileLimit,
                color, fuelType, engineType, zone, price, discount, startDate, endDate
            } = req.body;

            if (!carImage || !carTitle || !carType || !numberOfSeats || !bags || 
                !transmission ||!mileLimit || !color || !fuelType || !engineType || 
                !zone || !price || !discount || !startDate || !endDate) {
                return res.status(400).send({ status: "failed", message: "Incomplete data provided" });
            }

            const newCar = new Cars({
                carImage, carTitle, carType, numberOfSeats, bags, transmission, mileLimit,
                color, fuelType, engineType, zone, price, discount, startDate, endDate
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
