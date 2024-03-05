const mongoose = require('mongoose');

const transporterSchema = new mongoose.Schema({
    email: { type: String, trim: true },
    password: { type: String, required: true, trim: true },
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
module.exports = mongoose.model("transporters", transporterSchema);