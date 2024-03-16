const Driver = require("../../models/Drivers.js"); // Changed from "../../models/Drivers"
// const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const sendMail = require("../../libs/mail.js");

class DriverController {
    static driverRegistration = async (req, res) => {
        try {
            // const {email, password} = req.body;
            const {email} = req.body;

            // if (!email || !password) {
            //     return res.status(422).json({ error: "Please fill in all fields properly" });
            // }

            const driverExist = await Driver.findOne({ email: email }); // Changed from User.findOne

            if (driverExist) {
                return res.status(422).json({ error: "Driver already exists" }); // Changed from "User already exists"
            }

            // // Hashing Password
            // const hashedPassword = await hashPassword(password);
            const driver = new Driver({ // Changed from User
                email
                // password: hashedPassword
            });

            const savedDriver = await driver.save(); // Save the driver and get the saved driver object

            // Generate JWT Token using the saved driver object
            const token = createToken(savedDriver, false, '1d');

            // Save token
            savedDriver.tokens = savedDriver.tokens.concat({ token });
            await savedDriver.save();

            //Send Registration mail to driver
            const template = await compileEmailTemplate({
                fileName: "register.mjml",
                data: {
                    fullName: savedDriver.fullName, // This is just an assumption, you need to provide the full name in the data object
                },
            });
            if (savedDriver._id) {
                try {
                    await sendMail(email, "Your Account on Transport Hub is Created Successfully", template);
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
                        email: "Failed to send Create Driver email.",
                    });
                }
            }

            //res.status(201).json({ message: "Driver registered successfully", token });

        } catch (error) {
            console.error("Error in driver registration:", error);
            res.status(500).json({ error: "Failed to register" });
        }
    }
}

module.exports = { DriverController };
