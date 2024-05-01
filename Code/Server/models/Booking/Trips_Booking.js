const mongoose = require('mongoose');

const TripsBookingSchema = new mongoose.Schema({
    carRental_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trips', // foreign key to the "trips" collection
    },
    firstName: {
        type: [String],
        required: true,
        trim: true,
    },
    lastName: {
        type: [String],
        required: true,
        trim: true,
    },
    country: {
        type: [String],
        required: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    cnic_no: {
        type: Number,
        required: true,
        trim: true,
    },
    mobile_no: {
        type: Number,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    departCity: {
        type: String,
    },
    departDate: {
        type: Date,
        trim: true,
    },
    NoOfAdults: {
        type: Number,
        required: true,
        trim: true,
    },
    NoOfChildren: {
        type: Number,
        required: true,
        trim: true,
    },
    NoOfInfrants: {
        type: Number,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
});


module.exports = mongoose.model("Trips_Booking", TripsBookingSchema);