const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShipmentSchema = new mongoose.Schema({
    commodityName: { type: String, trim: true },
    selectedMode: { type: String},
    pickupDate: { type: String},
    moreDetails: { type: String, trim: true },
    pickupFirstName: { type: String, trim: true },
    pickupLastName: { type: String, trim: true },
    pickupEmail: { type: String, trim: true },
    pickupPhone: { type: Number, trim: true },
    pickupCity: { type: String, trim: true },
    pickupZipcode: { type: Number, trim: true },
    pickupAddress: { type: String, trim: true },
    pickupInstruction: { type: String, trim: true },
    deliveryFirstName: { type: String, trim: true },
    deliveryLastName: { type: String, trim: true },
    deliveryEmail: { type: String, trim: true },
    deliveryPhone: { type: Number, trim: true },
    deliveryCity: { type: String, trim: true },
    deliveryZipcode: { type: Number, trim: true },
    deliveryAddress: { type: String, trim: true },
    deliveryInstruction: { type: String, trim: true },

}, {
    timestamps: true
})

const Shipment = mongoose.model("Shipment", ShipmentSchema);
module.exports = Shipment;