const mongoose = require("mongoose");

//Defining Schema
const zoneSchema = new mongoose.Schema({
    zone: { type: String, trim: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
});

//CREATING MODAL
const ZoneModal = mongoose.model('Zone', zoneSchema);
module.exports = ZoneModal;