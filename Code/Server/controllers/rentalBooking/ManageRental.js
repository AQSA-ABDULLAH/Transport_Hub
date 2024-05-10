const RentalBooking = require("../../models/Rental_Booking.js");

const emailCompare = (email, rentalemail) => {
    return email === rentalemail;
};

const rentalBooking = async (req, res) => {
    try {
        const { _id, rentalemail } = req.body;

        if (!_id || !rentalemail) {
            return res.status(400).json({ error: "Enter Confirm Id and email" });
        }

        const rentalBooking = await RentalBooking.findOne({ _id: _id });
        if (rentalBooking) {
            const isMatch = await emailCompare(rentalemail, rentalBooking.email);
            if (!isMatch) {
                return res.status(400).json({ status: "400", message: "Email does not match the rental booking" });
            }
            // If both _id and email match, return the rental booking
            return res.status(200).json({ status: "200", rentalBooking });
        } else {
            // If rental booking with the provided _id doesn't exist
            return res.status(404).json({ message: "Rental booking not found" });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { rentalBooking };
