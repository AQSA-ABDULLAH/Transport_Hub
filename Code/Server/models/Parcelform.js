const mongoose = require('mongoose');

const parcelFormSchema = new mongoose.Schema({
  pickupLocation: {
    type: String,
    trim: true
  },
  weight: {
    type: Number, // Changed to Number
    trim: true
  },
  parcelType: {
    type: String,
    trim: true
  },
  phone: {
    type: Number, // Changed to Number
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  time: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  selectedCompany: {
    type: String,
    trim: true
  },
  rate: {
    type: Number, // Changed to Number
    trim: true
  },
},
{
  timestamps: true
});

const parcelForm = mongoose.model("Parcelform", parcelFormSchema);
module.exports=parcelForm;