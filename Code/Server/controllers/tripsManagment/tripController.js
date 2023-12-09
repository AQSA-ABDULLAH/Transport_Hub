const mongoose = require("mongoose");
const Trips = require("../../models/Trips");

class TripsController {
  static addTrips = async (req, res) => {
    try {
      const {
        tripTitle,
        location,
        images,
        description,
        extraInformation,
        price
      } = req.body;


      const newTrip = new Trips({
        tripTitle,
        location,
        images,
        description,
        extraInformation,
        price
      });

      await newTrip.save();

      res.status(201).send({ status: "success", message: "Trip saved successfully", data: newTrip });
    } catch (error) {
      console.error(error); // Log the error
      res.status(500).send({ status: "failed", message: "Internal Server Error" });
    }
  };
}

module.exports = TripsController;
