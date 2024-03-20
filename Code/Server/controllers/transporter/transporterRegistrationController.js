const Transport = require("../../models/Transporter.js");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const sendMail = require("../../libs/mail.js");

class TransporterController {
    static transporterRegistration = async (req, res) => {
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(422).json({ error: "Please fill in all fields properly" });
            }

            const transporterExist = await Transport.findOne({ email });

            if (transporterExist) {
                return res.status(422).json({ error: "Transporter already exists" });
            } else {
                const generatedPassword =
                    Math.random().toString(36).slice(-8) +
                    Math.random().toString(36).slice(-8);

                // Hashing Password
                const hashedPassword = await hashPassword(generatedPassword);
                const transporter = new Transport({
                    email,
                    password: hashedPassword
                });

                const savedTransporter = await transporter.save();

                // Generate JWT Token using the saved transporter object
                const token = createToken(savedTransporter, false, '1d');

                // Save token
                savedTransporter.tokens = savedTransporter.tokens.concat({ token });
                await savedTransporter.save();

                //Send Registration mail to transporter
                const template = await compileEmailTemplate({
                    fileName: "register.mjml",
                    data: {
                        fullName: savedTransporter.fullName, // Provide the full name here
                    },
                });
                if (savedTransporter._id) {
                    try {
                        await sendMail(email, "Your Account on Transport Hub is Created Successfully", template);
                        return res.status(201).send({
                            status: "success",
                            message: "Transporter created successfully",
                            token: token,
                        });
                    } catch (error) {
                        res.status(201).send({
                            status: "success",
                            message: "Driver created successfully",
                            token: token,
                            email: "Failed to send Create Transporter email.",
                        });
                    }
                }
            }
        } catch (error) {
            console.error("Error in transporter registration:", error);
            return res.status(500).json({ error: "Failed to register" });
        }
    }
}
module.exports = { TransporterController };

