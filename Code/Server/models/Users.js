const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    fullName:String,
    phoneNo:String,
    email:String,
    password:String,
    address:String,
    city:String,
});
module.exports = mongoose.model("users",usersSchema);