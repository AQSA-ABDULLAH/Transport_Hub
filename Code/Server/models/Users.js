const mongoose = require('mongoose');

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
        type: String,
        default: false,
        required:true
    },
    is_varified: {
        type: Boolean,
        default:0
    },
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