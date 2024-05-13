const mongoose = require('mongoose');

const TripsBookingSchema = new mongoose.Schema({
    trip_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trips', // foreign key to the "trips" collection
    },
    
    passengerDetails: [],
    contactDetails: {
        fullName: String,
        email: String,
        mobile_no: String,
        cnic_no: String,
        
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
        
        trim: true,
    },
    NoOfChildren: {
        type: Number,
        
        trim: true,
    },
    NoOfInfants: {
        type: Number,
        
        trim: true,
    },
    
    totalPrice:{
        type: Number,
        
        trim: true,
    },
    tripTitle: {
        type: String,
    },
    description: {
        type: String,
    },
    images: {
        type: String,
    },
});



module.exports = mongoose.model("Trips_Booking", TripsBookingSchema);