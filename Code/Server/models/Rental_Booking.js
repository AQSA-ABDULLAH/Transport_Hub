const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentalBookingSchema = new mongoose.Schema({
    user_id : {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Users"
    },
    car_id: {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Cars"
    },
    pickup_location : {
        type: String,
        trim: true
    },
    pickup_date : {
        type: Date,
        required: true,
    },
    pickup_time : {
        type: Date,
        required: true,
    },
    drop_location : {
        type: String,
        trim: true
    },
    drop_date : {
        type: Date,
        required: true,
    },
    drop_time : {
        type: Date,
        required: true,
    },
}, {
    timestamps: true
})

const RentalBooking = mongoose.model("RentalBooking", RentalBookingSchema);
module.exports = RentalBooking;