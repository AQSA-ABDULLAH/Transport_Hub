const RentalBooking = require("../../models/Rental_Booking.js");
const mongoose = require('mongoose');

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
            // Create a new rental booking instance
            const rentalBooking = new RentalBooking({
                pickupLocation, pickupDate, pickupTime, dropLocation, dropDate, dropTime, firstName, 
                lastName, email, phoneNumber, cnic, zipCode, address, car_id
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

      // GET METHOD
  static getRentalBooking = async (req, res) => {
    try {
      const rentalBooking = await RentalBooking.find();
      res.status(200).send({ status: "success", data: rentalBooking });
    } catch (error) {
      res.status(404).send({ status: "failed", message: "Failed to get Data" });
    }
  };

  // GETT METHOD BY ID
  static getRentalBooking = async (req, res) => {
    const { id } = req.params;
    
    // Check if id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({ status: "failed", message: `Invalid Booking ID: ${id}` });
    }
  
    try {
      const rentalBooking = await RentalBooking.findById(id);
      if (!rentalBooking) {
        return res.status(404).send({ status: "failed", message: `No Booking found with ID: ${id}` });
      }
      res.status(200).send({ status: "success", data: rentalBooking });
    } catch (error) {
      console.error("Error fetching Booking data:", error);
      res.status(500).send({ status: "failed", message: "Failed to get Booking Data" });
    }
  };
}

module.exports = { RentalBookingController };
