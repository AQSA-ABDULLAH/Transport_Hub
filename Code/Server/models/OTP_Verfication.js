const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OTPVerificationSchema = new mongoose.Schema({
    transporter_id : {
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Transporter"
    },
    otp: {
        type:Number,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required:true,
        get: (createdAt) => createdAt.getTime(),
        set: (createdAt) => new Date(createdAt)
    },
    expireAt: {
        type: Date,
        default: Date.now
    },
})

const OTPVerification = mongoose.model("OTPVerification", OTPVerificationSchema);
module.exports = OTPVerification;