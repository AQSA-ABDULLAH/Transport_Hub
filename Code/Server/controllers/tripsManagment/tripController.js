const mongoose = require("mongoose");
const Joi = require("joi");
const Trips = require("../../models/Trips");

class TripsController {
  
  static tripPackageValidationSchema = Joi.object({
    category: Joi.string().required().label('Category').messages({
        'string.base': '{#label} must be a string',
        'any.required': '{#label} is required',
    }),
    tripTitle: Joi.string().required().label('Trip Title').messages({
        'string.base': '{#label} must be a string',
        'any.required': '{#label} is required',
    }),
    description: Joi.string().required().label('Description').messages({
        'string.base': '{#label} must be a string',
        'any.required': '{#label} is required',
    }),
    location: Joi.string().required().label('Location').messages({
        'string.base': '{#label} must be a string',
        'any.required': '{#label} is required',
    }),
    images: Joi.string().trim().required().label('Images').messages({
        'string.base': '{#label} must be a string',
        'any.required': '{#label} is required',
    }),
    price: Joi.number().required().label('Price').messages({
        'number.base': '{#label} must be a number',
        'any.required': '{#label} is required',
    }),
    extraInformation: Joi.string().label('Extra Information').messages({
        'string.base': '{#label} must be a string',
    }),
    noOfGuest: Joi.string().label('noOfGuest').messages({
        'string.base': '{#label} must be a string',
    }),
    noOfDays: Joi.string().label('noOfDays:').messages({
        'string.base': '{#label} must be a string',
    }),
    departureCity: Joi.string().label('DepartureCity:').messages({
        'string.base': '{#label} must be a string',
    }),
    startDate: Joi.date().label('startDate').messages({
        'string.base': '{#label} must be a string',
    }),
    endDate: Joi.date().label('endDate').messages({
        'string.base': '{#label} must be a string',
    }),
    status: Joi.string().label('status').messages({
        'string.base': '{#label} must be a string',
    }),
    Ages: Joi.string().label('Ages').messages({
        'string.base': '{#label} must be a string',
    }),
    
    CheckIn: Joi.string().label('CheckIn').messages({
        'string.base': '{#label} must be a Number',
    }),
    
    Checkout: Joi.string().label('Checkout').messages({
        'string.base': '{#label} must be a Number',
    }),
    
    BookingCloseDate: Joi.string().label('BookingCloseDate').messages({
        'string.base': '{#label} must be a string',
    }),
    

    
});

  // Create a new trip
  static addTrips = async (req, res) => {
    const data = req.body;
    data.images = req?.file?.filename;
    const { error } = this.tripPackageValidationSchema.validate(data);

    if (error) {
      console.error('Validation error:', error.details);
      return res.status(400).json({
        status: 'failed',
        message: 'Validation error',
        errors: error.details,
      });
    }
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
      const { category } = req.query;
      let trips;
  
      if (category) {
        trips = await Trips.find({ category });
      } else {
        trips = await Trips.find({});
      }
  
      if (trips.length === 0) {
        return res.status(404).send({ status: 'success', message: 'No records found' });
      }
  
      res.status(200).send({ status: 'success', data: trips });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: 'failed', message: 'Internal Server Error' });
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
