const mongoose = require("mongoose");
const SliderModal = require("../../models/Slider.js");

class SliderController {
    static createSlider = async (req, res) => {
        const { heading, content, image } = req.body;
        if(!heading) return res.send({ status: "failed", message: `Heading, is required` });
        if(!content) return res.send({ status: "failed", message: `Content, is required` });

        try {
            const newSlider = new SliderModal({ heading, content, image });
            await newSlider.save();

            res.status(201).send({ status: "success", message: "Data saved successfully"});
        } catch (error) {
            console.log(error);
            res.status(409).send({ status: "failed", message: "Failed to Save" });
        }
    };
    
    static getSliderAll = async (req, res) => {
        try {
            const sliderData = await SliderModal.find();
            res.status(200).send({ status: "success", data: sliderData });
        } catch (error) {
            res.status(404).send({ status: "failed", message: "Failed to get Data" });
        }
    };

    static getSlider = async (req, res) => {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({status: "failed", message: `No Slider with id: ${id}`});
        try {
            const sliderData = await SliderModal.findById(id);
            res.status(200).send({ status: "success", data: sliderData });
        } catch (error) {
            res.status(404).send({ status: "failed", message: "Failed to get Data" });
        }
    };

    static updateSlider = async (req, res) => {
        const { id } = req.params;
        const { heading, content, image } = req.body;
        if(!heading) return res.send({ status: "failed", message: `Heading, is required` });
        if(!content) return res.send({ status: "failed", message: `Content, is required` });

        if(!id) return res.status(400).send({status: "failed", message: `Id is required`});

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({status: "failed", message: `No Slider with id: ${id}`});

        const updatedSlider = { heading, content, image, _id: id };
        try {
            await SliderModal.findByIdAndUpdate(id, updatedSlider, {new: true});

            res.status(200).send({ status: "success", message: "Slider Updated successfully", data: updatedSlider });
        } catch (error) {
            res.status(404).send({ status: failed, message: "Failed to Update" });
        }
    };

    static deleteSlider = async (req, res) => {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Slider with id: ${id}`);
        
        try {
            await SliderModal.findByIdAndRemove(id);
        
            res.status(200).send({ status:"success", message: "Slider deleted successfully." });
        } catch (error) {
            res.status(404).send({ status:"failed", message:"Slider failed to delete." });
        }
    };

};

module.exports = SliderController;
