const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:String,
    phoneNo:String,
    email:String,
    address:String,
    city:String,
    password:String,
});
module.exports = mongoose.model("users",usersSchema);