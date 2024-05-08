const mongoose = require('mongoose');

const PickBoyRegisterSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  vehicleType: {
    type: String,
    trim: true,
  },
  cnicNumber: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  picture: {
    type: String,
    trim: true,
  },
  drivingLicense: {
    type: String,
    trim: true,
  },
  vehiclePapers: {
    type: String,
    trim: true,
  },
  referenceNumber: {
    type: String,
    trim: true,
  },
  status: 
{   type: String, enum: ['pending', 'approved', 'rejected'], 
    default: 'pending' 
}
}, {
  timestamps: true,
}

);

module.exports =mongoose.model('PickupBoyRegister', PickBoyRegisterSchema);
