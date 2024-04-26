const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentalBookingSchema = new mongoose.Schema({
    pickupLocation: { type: String, trim: true },
    pickupDate: { type: String},
    pickupTime: { type: String},
    dropLocation: { type: String, trim: true },
    dropDate: { type: String},
    dropTime: { type: String},
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    phoneNumber: { type: Number, trim: true },
    email: { type: String, trim: true },
    cnic: { type: String, trim: true },
    zipCode: { type: Number, trim: true },
    address: { type: String, trim: true },
    car_id: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Cars"
    },
    addDriver: { type: Boolean },
    addInfantSeat: { type: Boolean },
    addToddlerSeat: { type: Boolean },
}, {
    timestamps: true
})

const RentalBooking = mongoose.model("RentalBooking", RentalBookingSchema);
module.exports = RentalBooking;