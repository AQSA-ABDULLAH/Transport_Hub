const mongoose = require("mongoose");
const Cars = require("../../models/Cars");
const Joi = require("joi");
class CarsController {
    static CarPackageValidationSchema = Joi.object({
        nameAndModel: Joi.string().required(),
        type: Joi.string().required(),
        description: Joi.string().required(),
        transmission: Joi.string().required(),
        color: Joi.string().required(),
        fuelType: Joi.string().required(),
        engineType: Joi.string().required(),
        image: Joi.string().trim().required(),
        bags: Joi.number().required(),
        mileLimit: Joi.number().required(),
        discount: Joi.number().required(),
        price: Joi.date(),
        price: Joi.date(),
        
      });
    
    static addCars = async (req, res) => {
       
            const data = req.body;
            data.image = req?.file?.filename;
            const { error } = this.CarPackageValidationSchema.validate(data);
            try {
                const newCar = await Cars.create(data);
                console.log("Data saved");
                res.status(201).send({ status: "success", message: "Trip saved successfully", data: newCar });
              } catch (error) {
                console.error(error); // Log the error
                res.status(500).send({ status: "failed", message: "Internal Server Error" });
              }
            
        
    };
}

module.exports = CarsController;
