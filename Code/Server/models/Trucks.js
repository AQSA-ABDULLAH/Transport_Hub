const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  truckImage: {
    type: String,
    trim: true
  },
  truckTitle: {
    type: String, 
    trim: true
  },
  truckMode: {
    type: String,
    trim: true
  },
  zone: {
    type: String,
    trim: true
  },
  vechicalType: {
    type: String,
    trim: true
  },
  length: {
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
  module.exports = mongoose.model("Trucks", truckSchema);