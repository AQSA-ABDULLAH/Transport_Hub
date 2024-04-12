const Rental_Booking = require("../../models/Rental_Booking.js");

class RentalBookingController {
    static async rentalBooking(req, res) {
        console.log('Received form data:', req.body);
        const { firstName, lastName, email, phoneNumber, cnic, zipCode, address } = req.body;
        
        // Check if any of the required fields are missing
        if (!firstName || !lastName || !email || !phoneNumber || !cnic || !zipCode || !address) {
            return res.status(422).json({ error: "Please fill in all fields properly" });
        }

        try {
            // Create a new rental booking instance
            const rentalBooking = new Rental_Booking({
                firstName, lastName, email, phoneNumber, cnic, zipCode, address
            });
            
            // Save the new rental booking to the database
            await rentalBooking.save();

            // Send a success response back to the client
            res.status(201).json({ status: "success", message: "Data saved successfully"});
        } catch (error) {
            console.error("Error in saving rental booking:", error);
            return res.status(500).json({ error: "Failed to save rental booking due to server error" });
        }
    }
}

module.exports = { RentalBookingController };
