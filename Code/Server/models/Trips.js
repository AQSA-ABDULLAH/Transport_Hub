const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  tripTitle: {
    type: String,
    trim: true
  },
  location: {
    type: String,
  
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
    type: String,

    trim: true
  },
  price: {
    type: Number,

    trim: true
  },
},
  {
    timestamps: true
  });

module.exports = mongoose.model("Trips", tripSchema);