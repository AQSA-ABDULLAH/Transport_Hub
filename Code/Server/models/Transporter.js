const mongoose = require('mongoose');

const transporterSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already Exist"],
        validate(value) {
            if (!validate.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phoneNo: {
        type: Number,
        required: true,
    },
    experience: String,
    dateOfBirth: String,
    address: String,
    city: String,
    education: String
});
module.exports = mongoose.model("transporters", transporterSchema);