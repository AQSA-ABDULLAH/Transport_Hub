const mongoose = require('mongoose');

const pickupBoySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  cnicNumber: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  cnicFront: {
    type: String,
    required: true,
  },
  cnicBack: {
    type: String,
    required: true,
  },
  drivingLicense: {
    type: String,
    required: true,
  },
  vehiclePapers: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
});

const PickupBoy = mongoose.model('PickupBoyRegister', pickupBoySchema);

module.exports = PickupBoy;
