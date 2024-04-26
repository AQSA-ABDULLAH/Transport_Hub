const Shipment = require("../../models/Shipment");
const mongoose = require('mongoose');

class ShipmentController {
    static async shipment(req, res) {
        console.log('Received form data:', req.body);
        const { commodityName, selectedMode, pickupDate, moreDetails } = req.body;

        try {
            const shipment = new Shipment({
                commodityName, selectedMode, pickupDate, moreDetails
            });

            await shipment.save();
            res.status(201).json({ status: "success", message: "Data saved successfully" });
        } catch (error) {
            console.error("Error in saving shipment:", error);
            return res.status(500).json({ error: "Failed to save shipment due to server error" });
        }
    }

    // GET all shipment
    static async getAllShipments(req, res) {
        try {
            const shipment = await Shipment.find();
            res.status(200).json({ status: "success", data: shipment });
        } catch (error) {
            res.status(500).json({ status: "failed", message: "Failed to get data" });
        }
    }

    // GET a single booking by ID
    static async getShipment(req, res) {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ status: "error", message: `Invalid shipment ID: ${id}` });
        }

        try {
            const shipment = await Shipment.findById(id);
            if (!shipment) {
                return res.status(404).json({ status: "error", message: `No shipment found with ID: ${id}` });
            }
            res.status(200).json({ status: "success", data: shipment });
        } catch (error) {
            console.error("Error fetching shipment data:", error);
            res.status(500).json({ status: "error", message: "Failed to retrieve shipment data", error: error.message });
        }
    };

}

module.exports = { ShipmentController };