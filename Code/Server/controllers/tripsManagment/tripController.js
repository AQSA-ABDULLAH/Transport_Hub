const mongoose = require("mongoose");
const Joi = require("joi");
const Trips = require("../../models/Trips");

class TripsController {
  static tripPackageValidationSchema = Joi.object({
    tripTitle: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    images: Joi.string().trim().required(),
    price: Joi.number().required(),
    extraInformation: Joi.string(),
  });

  // Create a new trip
  static addTrips = async (req, res) => {
    const data = req.body;
    data.images = req?.file?.filename;
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
   
    try {
      const getData = await Trips.find({});
      const package1 = await Trips.findById(req.params.id);
      if (!package1) {
        return res.status(404).send({ status: "failed", message: "Trip not found" });
       
      }
      res.status(200).send({ status: "success", data: package1 });
    } catch (err) {
      console.error(error);
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
 
  };

  // Update a trip by ID
  static updateTripById = async (req, res) => {
    const tripId = req.params.id;
    try {
      const tripPackage1 = await Trips.findById(tripId);
      
      if (!tripPackage1) {
        return res.status(404).send({ status: "failed", message: "Trip not found" });
      }
  
      // Assuming you have some update data in req.body, modify this as needed
      const updateData = req.body;
  
      const updatedTrip = await Trips.findByIdAndUpdate(tripId, updateData, { new: true });
  
      res.status(200).send({ status: "success", message: "Trip updated successfully", data: updatedTrip });
      console.log(updatedTrip);
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
  };
  

  // Delete a trip by ID
  static deleteTripById = async (req, res) => {
    const tripId  = req.params.id;
    try {
      const tripPackage1 = await Trips.findById(tripId);
      console.log(tripPackage1);
      await Trips.findByIdAndDelete(tripPackage1);
      if (!tripPackage1) {
        return res.status(404).send({ status: "failed", message: "Trip not found" });
      }
      res.status(200).send({ status: "success", message: "Trip deleted successfully", data: tripPackage1 });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
  }
   
}

module.exports = TripsController;
