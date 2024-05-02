const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const transporterSchema = new mongoose.Schema({
    email: { type: String, trim: true },
    password: { type: String, required: true, trim: true },
    otp: {
        type: Number,
        required: true
    },
    is_verified: { type: Boolean, default: false },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ],
    bids: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'ad',
        },
    ],
    shipment: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'ad',
        },
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
module.exports = mongoose.model("transporters", transporterSchema);