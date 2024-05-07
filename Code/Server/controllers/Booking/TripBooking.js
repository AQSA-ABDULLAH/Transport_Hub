const mongoose = require('mongoose'); // Required for ObjectId validation
const Trips_Booking  = require("../../models/Booking/Trips_Booking.js");

class TripBookingController {
    static tripBooking=async (req, res) =>{
        const data = req.body;
        console.log(data);
        try {
            const newTripBooking = await Trips_Booking.create(data);
            console.log("Data saved");
            console.log(newTripBooking);
            res.status(201).send({ status: "success", message: "Trip saved successfully", data: newTripBooking });
          } catch (error) {
            console.error(error); // Log the error
            res.status(500).send({ status: "failed", message: "Internal Server Error" });
          }
        
    }
    
    // GET all bookings
    static async getAllTripBookings(req, res) {
        try {
            const tripBooking = await Trips_Booking.find();
            res.status(200).json({ status: "success", data: tripBooking });
        } catch (error) {
            res.status(500).json({ status: "failed", message: "Failed to get data" });
        }
    }

    // GET a single booking by ID
    static async getTripBooking(req, res) {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ status: "failed", message: `Invalid Booking ID: ${id}` });
        }
    
        try {
            const tripBooking = await Trips_Booking.findById(id);
            if (!tripBooking) {
                return res.status(404).json({ status: "failed", message: `No Booking found with ID: ${id}` });
            }
            res.status(200).json({ status: "success", data: tripBooking });
        } catch (error) {
            console.error("Error fetching Booking data:", error);
            res.status(500).json({ status: "failed", message: "Failed to get Booking Data" });
        }
    };
}

module.exports = { TripBookingController };