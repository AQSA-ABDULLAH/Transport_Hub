const mongoose = require('mongoose');

const transporterSchema = new mongoose.Schema({
    fullName: {
        type:String,
        requried: true
    },
    email: String,
    passowrd: String,
});
module.exports = mongoose.model("transporters", transporterSchema);