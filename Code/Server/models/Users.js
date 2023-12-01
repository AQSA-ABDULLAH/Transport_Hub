const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    // ... other fields

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

// Hashing Password
usersSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        try {
            const hashedPassword = bcrypt.hashSync(this.password, 12);
            this.password = hashedPassword;
            console.log("hashing password");
            next();
        } catch (error) {
            next(error);
        }
    } else {
        next();
    }
});

const User = mongoose.model("users", usersSchema);
module.exports = User;
