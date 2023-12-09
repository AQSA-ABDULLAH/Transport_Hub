const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carImage: {
    type: String,
    trim: true
  },
  carTitle: {
    type: String, 
    trim: true
  },
  carType: {
    type: String,
    trim: true
  },
  numberOfSeats: {
    type: Number,
    trim: true
  },
  transmission: {
    type: String,
    trim: true
  },
  bags: {
    type: Number,
    trim: true
  },
  mileLimit: {
    type: Number,
    trim: true
  },
  color: {
    type: String,
    trim: true
  },
  fuelType: {
    type: String,
    trim: true
  },
  engineType: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },
  zone: {
    type: String,
    trim: true
  },
  discount: {
    type: Number,
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
},
  {
    timestamps: true
  });
  module.exports = mongoose.model("Cars", carSchema);
