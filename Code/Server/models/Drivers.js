const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const driversSchema = new mongoose.Schema({
    driverEmail: { type: String, unique:true, trim: true },
    password: { type: String, required: true, trim: true },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    driver_location:{ type: String, trim: true },
    vechicalType:{ type: String, trim: true },
    termsAndCondition:{ type: Boolean, default:false, trim: true },
    profilePhoto:{ type: String, trim: true },
    cnicFrontSide:{ type: String, trim: true },
    cnicBackSide:{ type: String, trim: true },
    drivingLicense:{ type: String, trim: true },
    status:{ type: Boolean, default:false, trim: true },
    otp: { type:String, trim: true },
    is_verified: { type: Boolean, default: false },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: { type: Date },
});

const Driver = mongoose.model("drivers", driversSchema);
module.exports = Driver;