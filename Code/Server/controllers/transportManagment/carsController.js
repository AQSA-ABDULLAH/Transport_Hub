const mongoose = require("mongoose");
const Cars = require("../../models/Cars");

class CarsController {
  static addCars = async (req, res) => {
    console.log(req.file, req.body, 16)
    const { carTitle, carType, numberOfSeats, transmission, bags, mileLimit, color,
      fuelType, engineType, price, zone, discount, startDate, endDate } = req.body;
    const carImage = req.file.path;

    if (
      !carTitle || !carType || !numberOfSeats || !transmission || !bags || !mileLimit || !color || !fuelType || !engineType || !price || !zone
    ) {
      return res
        .status(422)
        .json({ error: "Please fill in all fields properly" });
    }

      try {
        const newCar = new Cars({
          carImage, carTitle, carType, numberOfSeats, transmission, bags, mileLimit, color,
          fuelType, engineType, price, zone, discount, startDate, endDate
        });
        await newCar.save();

        res.status(201).send({
          status: "success", message: "Car saved successfully",
          data: newCar
        });
      }
      catch (error) {
        console.log(error);
        res.status(409).send({ status: failed, message: "Failed to Save" });
      }
    };
  };

module.exports = CarsController;