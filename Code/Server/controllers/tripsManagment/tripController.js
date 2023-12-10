const mongoose = require("mongoose");
const Joi = require("joi");
const Trips = require("../../models/Trips");

class TripsController {
  static tripPackageValidationSchema = Joi.object({
    tripTitle: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    image: Joi.string().trim().required(),
    price: Joi.number().required(),
    extraInformation: Joi.string(),
  });

  // Create a new trip
  static addTrips = async (req, res) => {
    const data = req.body;
    data.image = req?.file?.filename;
    const { error } = this.tripPackageValidationSchema.validate(data);
    try {
      const newTrip = await Trips.create(data);
      console.log("Data saved");
      res.status(201).send({ status: "success", message: "Trip saved successfully", data: newTrip });
    } catch (error) {
      console.error(error); // Log the error
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
  };

  // Get all trips
  static getAllTrips = async (req, res) => {
    try {
      const trips = await Trips.find();
      res.status(200).send({ status: "success", data: trips });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
  };

  // Get a single trip by ID
  static getTripById = async (req, res) => {
    const { tripId } = req.params;
    try {
      const trip = await Trips.findById(tripId);
      if (!trip) {
        return res.status(404).send({ status: "failed", message: "Trip not found" });
      }
      res.status(200).send({ status: "success", data: trip });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
  };

  // Update a trip by ID
  static updateTripById = async (req, res) => {
    const { tripId } = req.params;
    const data = req.body;
    try {
      const updatedTrip = await Trips.findByIdAndUpdate(tripId, data, { new: true });
      if (!updatedTrip) {
        return res.status(404).send({ status: "failed", message: "Trip not found" });
      }
      res.status(200).send({ status: "success", message: "Trip updated successfully", data: updatedTrip });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
  };

  // Delete a trip by ID
  static deleteTripById = async (req, res) => {
    const { tripId } = req.params;
    try {
      const deletedTrip = await Trips.findByIdAndRemove(tripId);
      if (!deletedTrip) {
        return res.status(404).send({ status: "failed", message: "Trip not found" });
      }
      res.status(200).send({ status: "success", message: "Trip deleted successfully", data: deletedTrip });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
  };
}

module.exports = TripsController;
