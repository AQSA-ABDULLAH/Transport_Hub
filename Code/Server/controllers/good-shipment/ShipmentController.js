const Shipment = require("../../models/Shipment");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const axios = require("axios")

class ShipmentController {
    static async shipment(req, res) {
        console.log('Received form data:', req.body);
        const { commodityName, selectedMode, ltlVehicleType, equipment, length, width, height, temperature, 
            dimensions, trap, trapSize, handlingItems, itemWeight, pickupDate, moreDetails, pickupFirstName,
            pickupLastName, pickupEmail, pickupPhone, pickupCity, pickupZipcode, pickupAddress, pickupInstruction,
            deliveryFirstName, deliveryLastName, deliveryEmail, deliveryPhone, deliveryCity, deliveryZipcode,
            deliveryAddress, deliveryInstruction, stopFirstName, stopLastName, stopEmail, stopPhone, stopCity, 
            stopZipcode, stopAddress, stopInstruction, stopType, bids, status  } = req.body;

        try {
            const shipment = new Shipment({
                commodityName, selectedMode, ltlVehicleType, equipment, length, width, height, temperature, 
                dimensions, trap, trapSize, handlingItems, itemWeight, pickupDate, moreDetails, pickupFirstName, 
                pickupLastName, pickupEmail, pickupPhone, pickupCity, pickupZipcode, pickupAddress, pickupInstruction,
                deliveryFirstName, deliveryLastName, deliveryEmail, deliveryPhone, deliveryCity, deliveryZipcode,
                deliveryAddress, deliveryInstruction, stopFirstName, stopLastName, stopEmail, stopPhone, stopCity, 
                stopZipcode, stopAddress, stopInstruction, stopType, bids, status
            });

            // try{
            //     const apikey = process.env.GOOGLE_API_KEY;

            //     const apiUrl = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${pickupCity}&destinations=${deliveryCity}&key=${apikey}`;


            // const response = await axios.get(apiUrl);
            // console.log(response.data)
            // console.log(response.data.rows[0].elements);
            // }catch (error){
            //     console.log(error);
            // }
            

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


    // UPDATE METHOD
  static updateShipment = async (req, res) => {
    console.log('Received form data:', req.body);
    const { id } = req.params;
    const {
        commodityName, selectedMode, ltlVehicleType, equipment, length, width, height, temperature, 
        dimensions, trap, trapSize, handlingItems, itemWeight, pickupDate, moreDetails, pickupFirstName, 
        pickupLastName, pickupEmail, pickupPhone, pickupCity, pickupZipcode, pickupAddress, pickupInstruction,
        deliveryFirstName, deliveryLastName, deliveryEmail, deliveryPhone, deliveryCity, deliveryZipcode,
        deliveryAddress, deliveryInstruction, stopFirstName, stopLastName, stopEmail, stopPhone, stopCity, 
        stopZipcode, stopAddress, stopInstruction, stopType, bids, status
    } = req.body;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send({ status: "failed", message: `Invalid Shipment ID: ${id}` });
    }
  
    const updatedShipment = {
        commodityName, selectedMode, ltlVehicleType, equipment, length, width, height, temperature, 
        dimensions, trap, trapSize, handlingItems, itemWeight, pickupDate, moreDetails, pickupFirstName, 
        pickupLastName, pickupEmail, pickupPhone, pickupCity, pickupZipcode, pickupAddress, pickupInstruction,
        deliveryFirstName, deliveryLastName, deliveryEmail, deliveryPhone, deliveryCity, deliveryZipcode,
        deliveryAddress, deliveryInstruction, stopFirstName, stopLastName, stopEmail, stopPhone, stopCity, 
        stopZipcode, stopAddress, stopInstruction, stopType, bids, status
    };
  
    try {
      const updatedData = await Shipment.findByIdAndUpdate(id, updatedShipment, { new: true });
  
      if (!updatedData) {
        return res.status(404).send({ status: "failed", message: `No Shipment found with ID: ${id}` });
      }
  
      res.status(200).send({ status: "success", message: "Shipment updated successfully", data: updatedData });
    } catch (error) {
      console.error("Error updating Shipment:", error);
      res.status(500).send({ status: "failed", message: "Failed to update Shipment" });
    }
  };
  

}

module.exports = { ShipmentController };