const mongoose = require("mongoose");
const Joi = require("joi");
const Trips = require("../../models/Trips");

class TripsController {
  static tripPackageValidationSchema = Joi.object({
    tripTitle: Joi.string().required(),
    image: Joi.string().required(),
    location: Joi.string().required(),
    image: Joi.string().trim().required(),
    price: Joi.number().required(),
    extraInformation: Joi.string(),
  });
  static addTrips = async (req, res) => {
    const data = req.body;
    data.image = req?.file?.filename;
    const { error } = this.tripPackageValidationSchema.validate(data);
    try {
      await Trips.create(data); // Assuming Trips is your Mongoose model
      console.log("data saved");
      res.status(201).send({ status: "success", message: "Trip saved successfully", data: newTrip });
    } catch (error) {
      console.error(error); // Log the error
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
  };
}

module.exports = TripsController;
