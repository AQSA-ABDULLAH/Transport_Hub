const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const usersSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    is_admin: {
        type: Boolean,
        default: false,
        required: true
    },
    is_verified: {
        type: Boolean,
        default: false
    },
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

const User = mongoose.model("users", usersSchema);
module.exports = User;
