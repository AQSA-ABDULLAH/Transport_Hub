const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    is_admin: {
        type: String,
        required:true
    },
    is_varified: {
        type: Number,
        default:0
    }
});
module.exports = mongoose.model("users", usersSchema);