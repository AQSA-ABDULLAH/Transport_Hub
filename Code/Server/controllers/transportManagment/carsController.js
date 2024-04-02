const mongoose = require("mongoose");
const Cars = require("../../models/Cars");

class CarsController {

  // POST METHOD
  static addCars = async (req, res) => {
    console.log(req.body, 16)
    const { carImage, carTitle, carType, numberOfSeats, transmission, bags, mileLimit, color,
      fuelType, engineType, price, zone, discount, startDate, endDate } = req.body;

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

  // GET METHOD
  static getCars = async (req, res) => {
    try {
      const carData = await Cars.find();
      res.status(200).send({ status: "success", data: carData });
    } catch (error) {
      res.status(404).send({ status: "failed", message: "Failed to get Data" });
    }
  };

  // GETT METHOD BY ID
  static getCar = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ status: "failed", message: `No Car with id: ${id}` });
    try {
      const carData = await Cars.findById(id);
      res.status(200).send({ status: "success", data: carData });
    } catch (error) {
      res.status(404).send({ status: "failed", message: "Failed to get Data" });
    }
  };

  // UPDATE METHOD
  // static updateCar = async (req, res) => {
  //   const { id } = req.params;
  //   const { name, image } = req.body;
  //   if (!name) return res.send({ status: "failed", message: `Name, is required` });

  //   if (!id) return res.status(400).send({ status: "failed", message: `Id is required` });

  //   if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ status: "failed", message: `No Trainer with id: ${id}` });

  //   const updatedTrainer = { name, image, _id: id };
  //   try {
  //     await TrainerModal.findByIdAndUpdate(id, updatedTrainer, { new: true });

  //     res.status(200).send({ status: "success", message: "Trainer Updated successfully", data: updatedTrainer });
  //   } catch (error) {
  //     res.status(404).send({ status: failed, message: "Failed to Update" });
  //   }
  // };

  // DELETE METHOD
  static deletecar = async (req, res) => {
    const { id } = req.params;
    console.log('Trying to delete car with ID:', id);
  
    try {
      const deletedCar = await Cars.findByIdAndDelete(id);
      console.log('Deleted Car:', deletedCar);
  
      if (!deletedCar) {
        return res.status(404).send({ status: "failed", message: "Car not found." });
      }
  
      res.status(200).send({ status: "success", message: "Car deleted successfully." });
    } catch (error) {
      console.log('Error deleting car:', error);
      res.status(500).send({ status: "failed", message: "Failed to delete car." });
    }
  };
  


};

module.exports = CarsController;