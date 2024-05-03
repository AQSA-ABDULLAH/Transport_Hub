const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShipmentSchema = new mongoose.Schema({
    commodityName: { type: String, trim: true },
    selectedMode: { type: String },
    pickupDate: { type: Date },
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

    stopFirstName: { type: String, trim: true },
    stopLastName: { type: String, trim: true },
    stopEmail: { type: String, trim: true },
    stopPhone: { type: Number, trim: true },
    stopCity: { type: String, trim: true },
    stopZipcode: { type: Number, trim: true },
    stopAddress: { type: String, trim: true },
    stopInstruction: { type: String, trim: true },
    stopType: { type: String, trim: true },

    deliveryDate: {type: Date},
    duration: { type: Number, default: 300 },
    timer: { type: Number, default: 300 },
    status: { type: String, default: "pending" },
    
    biddingEnded: {
        type: Boolean,
        default: false,
      },
    bids: [
        {
            transporter: {
                type:  mongoose.Schema.Types.ObjectId,
                ref: 'Transporter',
            },
            bidamount: {
                type: Number,
            },
            status: {
                type: Boolean,
                default: false
            },
            time: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    createShipment: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    shippedBy: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Transporter',
    },

}, {
    timestamps: true
})

const Shipment = mongoose.model("Shipment", ShipmentSchema);
module.exports = Shipment;