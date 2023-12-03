const mongoose = require('mongoose');

const transporterSchema = new mongoose.Schema({
    fullName: {
        type:String,
        requried: true
    },
    email: {
        type:String,
        requried: true,
        unique:true
    },
    phoneNumber: {
        type: Number,
        requried: true
    },
    experience:{
        type: String,
        requried: true,
        enum: ['yes', 'no']
    },
    address:{
        type: String,
        requried: true
    },
    city:{
        type: String,
        requried: true
    },
    education:{
        type: String,
        requried: true
    }
});
module.exports = mongoose.model("transporters", transporterSchema);