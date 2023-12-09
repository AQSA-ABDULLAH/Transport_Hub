const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  tripTitle: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  images: {
    type: [String], // Change to an array of strings
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  extraInformation: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
},
{
  timestamps: true
});

module.exports = mongoose.model("Trips", tripSchema);