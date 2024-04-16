const RentalBooking = require("../../models/Rental_Booking.js");
const mongoose = require('mongoose'); // Required for ObjectId validation

class RentalBookingController {
    static async rentalBooking(req, res) {
        console.log('Received form data:', req.body);
        const { pickupLocation, pickupDate, pickupTime, dropLocation, dropDate, dropTime, firstName, 
            lastName, email, phoneNumber, cnic, zipCode, address, car_id } = req.body;
        
        // Check if any of the required fields are missing
        // if (!firstName || !lastName || !email || !phoneNumber || !cnic || !zipCode || !address) {
        //     return res.status(422).json({ error: "Please fill in all fields properly" });
        // }

        try {
            const rentalBooking = new RentalBooking({
                pickupLocation, pickupDate, pickupTime, dropLocation, dropDate, dropTime, firstName, 
                lastName, email, phoneNumber, cnic, zipCode, address, car_id
            });
            
            await rentalBooking.save();
            res.status(201).json({ status: "success", message: "Data saved successfully"});
        } catch (error) {
            console.error("Error in saving rental booking:", error);
            return res.status(500).json({ error: "Failed to save rental booking due to server error" });
        }
    }

    // GET all bookings
    static async getAllRentalBookings(req, res) {
        try {
            const rentalBookings = await RentalBooking.find();
            res.status(200).json({ status: "success", data: rentalBookings });
        } catch (error) {
            res.status(500).json({ status: "failed", message: "Failed to get data" });
        }
    }

    // GET a single booking by ID
    static async getRentalBooking(req, res) {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ status: "failed", message: `Invalid Booking ID: ${id}` });
        }
    
        try {
            const rentalBooking = await RentalBooking.findById(id);
            if (!rentalBooking) {
                return res.status(404).json({ status: "failed", message: `No Booking found with ID: ${id}` });
            }
            res.status(200).json({ status: "success", data: rentalBooking });
        } catch (error) {
            console.error("Error fetching Booking data:", error);
            res.status(500).json({ status: "failed", message: "Failed to get Booking Data" });
        }
    };
}

module.exports = { RentalBookingController };

