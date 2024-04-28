const Driver = require("../../models/Drivers.js");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const mailer = require("../../libs/mailer.js");

class DriverController {
  static async generateOTP() {
    return Math.floor(100000 + Math.random() * 9000);
  }

  static async driverRegistration(req, res) {
    console.log('Received form data:', req.body);
    try {
      const { driverEmail } = req.body;

      if (!driverEmail) {
        return res.status(422).json({ error: "Please fill in all fields properly" });
      }

      const driverExist = await Driver.findOne({ driverEmail });

      if (driverExist) {
        if (driverExist.is_verified === true) {
          return res.status(400).json({ error: "Already Verified" });
        }
        return res.status(422).json({ error: "Driver already exists" });
      } else {
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);

        // Generate OTP
        const OTP = await DriverController.generateOTP();

        // Hashing Password
        const hashedPassword = await hashPassword(generatedPassword);

        const driver = new Driver({
          driverEmail,
          password: hashedPassword,
          otp: OTP
        });

        const savedDriver = await driver.save();

        // Generate JWT Token using the saved driver object
        const token = createToken(savedDriver, false, '1d');

        // Save token
        savedDriver.tokens = savedDriver.tokens.concat({ token });
        await savedDriver.save();

        // Send Registration mail to driver
        if (savedDriver._id) {
          try {
            // Send OTP
            const msg = `<p> Hi <b>${driver.driverEmail}</b>, </br> <h4>${OTP}</h4> </p>`;
            await mailer.sendMail(driver.driverEmail, 'OTP VERIFICATION', msg);
            return res.status(201).send({
              status: "success",
              message: "Driver created successfully",
              token: token,
            });
          } catch (error) {
            return res.status(500).send({
              status: "error",
              message: "Failed to send Create Driver email.",
              error: error.message,
            });
          }
        }
      }
    } catch (error) {
      console.error("Error in driver registration:", error);
      return res.status(500).json({ error: "Failed to register" });
    }
  }

  static async verifyOTP(req, res) {
    try {
      const { driverEmail, otp } = req.body;
      console.log("Received form data:", { driverEmail, otp });
      const driver = await Driver.findOne({ driverEmail });

      if (!driver) {
        return res.status(400).send({
          status: "error",
          message: "Driver not found with the provided email.",
        });
      }

      if (driver.is_verified) {
        return res.status(400).send({
          status: "error",
          message: "Driver account is already verified.",
        });
      }

      if (driver.otp !== otp) {
        return res.status(400).send({
          status: "error",
          message: "Incorrect OTP.",
        });
      }

      // Update driver's is_verified status
      driver.is_verified = true;
      await driver.save();

      return res.status(200).send({
        status: "success",
        message: "Account Verified Successfully!",
      });
    } catch (error) {
      console.error("Error verifying OTP:", error);
      return res.status(500).send({
        status: "error",
        message: "Failed to verify OTP.",
        error: error.message,
      });
    }
  }

  // Function to validate an email address
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // UPDATE DRIVER
  static updateDriver = async (req, res) => {
    console.log('Received form data:', req.body);
    const { driverEmail } = req.params;
    const { password, firstName, lastName, driver_location, vechicalType, termsAndCondition, profilePhoto,
      cnicFrontSide, cnicBackSide, drivingLicense, status } = req.body;

    if (!DriverController.isValidEmail(driverEmail)) {
      return res.status(400).send({ status: "failed", message: "Invalid driverEmail" });
    }

    const updatedDriver = { password, firstName, lastName, driver_location, vechicalType, termsAndCondition, profilePhoto, cnicFrontSide, cnicBackSide, drivingLicense, status };

    try {
      const updatedData = await Driver.findOneAndUpdate({ driverEmail }, updatedDriver, { new: true });

      if (!updatedData) {
        return res.status(404).send({ status: "failed", message: `No Driver found with Email: ${driverEmail}` });
      }

      res.status(200).send({ status: "success", message: "Driver updated successfully", data: updatedData });
    } catch (error) {
      console.error("Error updating driver:", error);
      res.status(500).send({ status: "failed", message: "Failed to update driver" });
    }
  };
}

module.exports = { DriverController };
