const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  category : {
    type : String,
    required : true,
    trim : true,
},
  tripTitle: {
    type: String,
    required : true,
    trim: true
  },
  location: {
    type: String,
    required : true,
    trim: true
  },
  images: {
    type : String,
    required : true,
    trim : true,
  },
  description: {
    type: String,

    trim: true
  },
  extraInformation: {
    type: [String],

    trim: true
  },
  price: {
    type: Number,

    trim: true
  },
  noOfGuest: {
    type: Number,
    
    trim: true
  },
  noOfDays: {
    type: Number,
    
    trim: true
  },
  noOfNights: {
    type: Number,
    trim: true
  },
  departureCity: {
    type: String,
    
    trim: true
  },
  startDate: {
    type: Date,
    
    trim: true
  },
  endDate: {
    type: Date,
    
    trim: true
  },
  Ages: {
    type: Number,
    trim:true
  },
  CheckIn: {
    type: String,
    trim:true
  },
  Checkout: {
    type: String,
    trim:true
  },
  BookingCloseDate: {
    type: Date,
    trim:true
  }
},
  {
    timestamps: true
  });

module.exports = mongoose.model("Trips", tripSchema);