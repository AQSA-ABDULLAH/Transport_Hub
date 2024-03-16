const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const driversSchema = new mongoose.Schema({
    driverEmail: { type: String, unique:true, trim: true },
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