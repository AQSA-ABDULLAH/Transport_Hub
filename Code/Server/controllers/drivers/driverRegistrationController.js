const Driver = require("../../models/Drivers.js"); // Changed from "../../models/Drivers"
// const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const sendMail = require("../../libs/mail.js");

class DriverController {
    static driverRegistration = async (req, res) => {
      try {
        const { driverEmail } = req.body;
  
        const driverExist = await Driver.findOne({ driverEmail });
  
        if (driverExist) {
          return res.status(422).json({ error: "Driver already exists" });
        }
  
        const savedDriver = new Driver({ driverEmail });
  
        await savedDriver.save();
  
        const token = createToken(savedDriver, false, '1d');
  
        savedDriver.tokens = savedDriver.tokens.concat({ token });
        await savedDriver.save();
  
        const template = await compileEmailTemplate({
          fileName: "register.mjml",
          data: {
            driverEmail: savedDriver.driverEmail, // Use savedDriver
          },
        });
  
        if (savedDriver._id) {
          try {
            await sendMail(driverEmail, "Your Account on Transport Hub is Created Successfully", template);
            res.status(201).send({
              status: "success",
              message: "Driver created successfully",
              token: token,
            });
          } catch (error) {
            res.status(201).send({
              status: "success",
              message: "Driver created successfully",
              token: token,
              driverEmail: "Failed to send Create Driver email.",
            });
          }
        }
      } catch (error) {
        console.error("Error in driver registration:", error);
        res.status(500).json({ error: "Failed to register" });
      }
    }
  }
  
  module.exports = { DriverController };