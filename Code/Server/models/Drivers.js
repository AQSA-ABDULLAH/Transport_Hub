const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const driversSchema = new mongoose.Schema({
    driverEmail: { type: String, unique:true, trim: true },
    password: { type: String, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    driver_location:{ type: String, required: true, trim: true },
    vechicalType:{ type: String, required: true, trim: true },
    termsAndCondition:{ type: Boolean, required: true, trim: true },
    profilePhoto:{ type: String, required: true, trim: true },
    cnicFrontSide:{ type: String, required: true, trim: true },
    cnicBackSide:{ type: String, required: true, trim: true },
    drivingLicense:{ type: String, required: true, trim: true },
    status:{ type: Boolean, default:false, trim: true },
    otp: { type:String, required:true, trim: true },
    is_verified: { type: Boolean, default: false },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
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