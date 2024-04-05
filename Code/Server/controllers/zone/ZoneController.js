const mongoose = require("mongoose");
const ZoneModal = require("../../models/Zone");

class ZoneController {
    static createZone = async (req, res) => {
        const { zone } = req.body;
        if (!zone) return res.status(400).send({ status: "failed", message: `Zone is required` });

        try {
            const newZone = new ZoneModal({ zone });
            await newZone.save();

            res.status(201).send({ status: "success", message: "Data saved successfully" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: "failed", message: "Failed to save data" });
        }
    };
    
    static getZoneAll = async (req, res) => {
        try {
            const zoneData = await ZoneModal.find();
            res.status(200).send({ status: "success", data: zoneData });
        } catch (error) {
            res.status(500).send({ status: "failed", message: "Failed to get data" });
        }
    };

    static getZone = async (req, res) => {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send({status: "failed", message: `Invalid ID: ${id}`});
        try {
            const zoneData = await ZoneModal.findById(id);
            if (!zoneData) return res.status(404).send({ status: "failed", message: "zone not found" });
            res.status(200).send({ status: "success", data: zoneData });
        } catch (error) {
            res.status(500).send({ status: "failed", message: "Failed to get data" });
        }
    };
}

module.exports = ZoneController;

