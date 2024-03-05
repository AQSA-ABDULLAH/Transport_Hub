const Transport = require("../../models//Transporter.js");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const sendMail = require("../../libs/mail.js");

class TransporterController {
    static driverRegistration = async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(422).json({ error: "Please fill in all fields properly" });
            }

            const driverExist = await Transport.findOne({ email });

            if (driverExist) {
                return res.status(422).json({ error: "Transporter already exists" });
            }

            // Hashing Password
            const hashedPassword = await hashPassword(password);
            const driver = new Transport({
                email,
                password: hashedPassword
            });

            const savedDriver = await driver.save();

            // Generate JWT Token using the saved driver object
            const token = createToken(savedDriver, false, '1d');

            // Save token
            savedDriver.tokens = savedDriver.tokens.concat({ token });
            await savedDriver.save();

            //Send Registration mail to driver
            const template = await compileEmailTemplate({
                fileName: "register.mjml",
                data: {
                    fullName: "", // Provide the full name here
                },
            });
            if (savedDriver._id) {
                try {
                    await sendMail(email, "Your Account on Transport Hub is Created Successfully", template);
                    return res.status(201).send({
                        status: "success",
                        message: "Transporter created successfully",
                        token: token,
                    });
                } catch (error) {
                    console.error("Failed to send Create Driver email.", error);
                    return res.status(500).json({ error: "Failed to send Create Driver email." });
                }
            }
        } catch (error) {
            console.error("Error in driver registration:", error);
            return res.status(500).json({ error: "Failed to register" });
        }
    }
}
module.exports = { TransporterController };