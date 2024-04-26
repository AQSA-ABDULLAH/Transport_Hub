const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShipmentSchema = new mongoose.Schema({
    commodityName: { type: String, trim: true },
    selectedMode: { type: String},
    pickupDate: { type: String},
    moreDetails: { type: String, trim: true },
    // dropDate: { type: String},
    // dropTime: { type: String},
    // firstName: { type: String, trim: true },
    // lastName: { type: String, trim: true },
    // phoneNumber: { type: Number, trim: true },
    // email: { type: String, trim: true },
    // cnic: { type: String, trim: true },
    // zipCode: { type: Number, trim: true },
    // address: { type: String, trim: true },
    // addDriver: { type: Boolean },
    // addInfantSeat: { type: Boolean },
    // addToddlerSeat: { type: Boolean },
}, {
    timestamps: true
})

const Shipment = mongoose.model("Shipment", ShipmentSchema);
module.exports = Shipment;