const Trips_Booking  = require("../../models/Booking/Trips_Booking.js");
const mongoose = require('mongoose'); // Required for ObjectId validation

class TripBookingController {
    static async tripBooking(req, res) {
        console.log('Received form data:', req.body);
        const { carRental_id,firstName,lastName,country,fullName,cnic_no,mobile_no,email,departCity,departDate,NoOfAdults,NoOfChildren,NoOfInfrants,gender} = req.body;
        try {
            const tripBooking = new Trips_Booking({
                carRental_id,firstName,lastName,country,fullName,cnic_no,mobile_no,email,departCity,departDate,NoOfAdults,NoOfChildren,NoOfInfrants,gender});
            
            await tripBooking.save();
            res.status(201).json({ status: "success", message: "Data saved successfully"});
        } catch (error) {
            console.error("Error in saving trip booking:", error);
            return res.status(500).json({ error: "Failed to save rental booking due to server error" });
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

