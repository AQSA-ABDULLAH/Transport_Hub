const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  carImage: {
    type: String,
    required: true,
    trim: true
  },
  carTitle: {
    type: String,
    required: true,
    trim: true
  },
  carType: {
    type: String,
    required: true,
    trim: true
  },
  numberOfSeats: {
    type: Number,
    required: true,
    trim: true
  },
  transmission: {
    type: String,
    required: true,
    trim: true
  },
  bags: {
    type: Number,
    required: true,
    trim: true
  },
  mileLimit: {
    type: Number,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  fuelType: {
    type: String,
    required: true,
    trim: true
  },
  engineType: {
    type: String,
    required: true,
    trim: true
  },
  zone: {
    type: String,
    required: true,
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
