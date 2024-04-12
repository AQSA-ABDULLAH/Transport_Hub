const Rental_Booking = require("../../models/Rental_Booking.js");

class RentalBookingController {
    static rentalBooking = async (req, res) => {
        const { firstName, lastName, email, phoneNumber, cnic, zipCode, address } = req.body;
        if (!firstName || !lastName || !email || !phoneNumber || !cnic || !zipCode || !address) {
            return res.status(422).json({ error: "Please fill in all fields properly" });
        }

        try {
            const rentalBooking = new Rental_Booking({
                firstName, lastName, email, phoneNumber, cnic, zipCode, address
            });
            await rentalBooking.save();
            res.status(201).send({ status: "success", message: "Data saved successfully"});
        } catch (error) {
            console.error("Error in user registration:", error);
            return res.status(500).json({ error: "Failed to register" });
        }
    }
}

module.exports = { RentalBookingController };