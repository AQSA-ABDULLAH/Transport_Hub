const mongoose = require('mongoose');

const transporterSchema = new mongoose.Schema({
    fullName:String,
    phoneNo:String,
    email: String,
    experience:String,
    dateOfBirth:String,
    address:String,
    city:String,
    education:String
});
module.exports = mongoose.model("transporters",transporterSchema);