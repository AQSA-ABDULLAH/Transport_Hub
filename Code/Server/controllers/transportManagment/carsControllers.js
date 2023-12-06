import mongoose from "mongoose";
import Cars from "../../models/Cars";

class TrainerController {
    static createTrainer = async (req, res) => {
        const { image, nameAndModel, type, seats, transmission, bags, mileLimit, price, color, fuelType,
            engineType, zone, discount, startDate, endDate } = req.body;

        if (!image, !nameAndModel, !type, !seats, !transmission, !bags, !mileLimit, !price, !color,
            !fuelType, !engineType, !zone) return res.send({ status: "failed", message: `Name, is required` });

        try {
            const newTrainer = new TrainerModal({
                image, nameAndModel, type, seats, transmission, bags, mileLimit,
                price, color, fuelType, engineType, zone, discount, startDate, endDate
            });
            await newTrainer.save();

            res.status(201).send({ status: "success", message: "Trainer saved successfully", data: newTrainer });
        } catch (error) {
            console.log(error);
            res.status(409).send({ status: failed, message: "Failed to Save" });
        }
    };

    // static getTrainers = async (req, res) => {
    //     try {
    //         const trainerData = await TrainerModal.find();
    //         res.status(200).send({ status: "success", data: trainerData });
    //     } catch (error) {
    //         res.status(404).send({ status: "failed", message: "Failed to get Data" });
    //     }
    // };

    // static getTrainer = async (req, res) => {
    //     const { id } = req.params;
    //     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ status: "failed", message: `No Trainer with id: ${id}` });
    //     try {
    //         const trainerData = await TrainerModal.findById(id);
    //         res.status(200).send({ status: "success", data: trainerData });
    //     } catch (error) {
    //         res.status(404).send({ status: "failed", message: "Failed to get Data" });
    //     }
    // };

    // static updateTrainer = async (req, res) => {
    //     const { id } = req.params;
    //     const { name, image } = req.body;
    //     if (!name) return res.send({ status: "failed", message: `Name, is required` });

    //     if (!id) return res.status(400).send({ status: "failed", message: `Id is required` });

    //     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ status: "failed", message: `No Trainer with id: ${id}` });

    //     const updatedTrainer = { name, image, _id: id };
    //     try {
    //         await TrainerModal.findByIdAndUpdate(id, updatedTrainer, { new: true });

    //         res.status(200).send({ status: "success", message: "Trainer Updated successfully", data: updatedTrainer });
    //     } catch (error) {
    //         res.status(404).send({ status: failed, message: "Failed to Update" });
    //     }
    // };

    // static deleteTrainer = async (req, res) => {
    //     const { id } = req.params;

    //     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Trainer with id: ${id}`);

    //     try {
    //         await TrainerModal.findByIdAndRemove(id);

    //         res.status(200).send({ status: "success", message: "Trainer deleted successfully." });
    //     } catch (error) {
    //         res.status(404).send({ status: "failed", message: "Trainer failed to delete." });
    //     }
    // };

};

export default TrainerController;