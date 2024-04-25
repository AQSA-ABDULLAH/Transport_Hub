
const Transport = require("../../models/Transporter.js");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const mailer = require("../../libs/mailer.js");
const SaveOTP = require("../../models/OTP_Verfication.js");

class TransporterController {
    static async transporterRegistration(req, res) {
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
                        return res.status(500).send({
                            status: "error",
                            message: "Failed to send Create Transporter email.",
                            error: error.message,
                        });
                    }
                }
            }
        } catch (error) {
            console.error("Error in transporter registration:", error);
            return res.status(500).json({ error: "Failed to register" });
        }
    }

    static async generateOTP() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    static async sendOTP(req, res) {
        try {
            const { email } = req.body;

            const transporter = await Transport.findOne({ email });

            if (!transporter) {
                return res.status(422).json({ error: "Transporter does not exist" });
            }

            if (transporter.is_verified === 1) {
                return res.status(400).json({ error: "Already Verified" });
            }

            // Generate OTP
            const OTP = await TransporterController.generateOTP();
            const saveOTP = new SaveOTP({
                transporter_id: transporter._id,
                otp: OTP
            });

            await saveOTP.save();

            const msg = `<p> Hi <b>${transporter.email}</b>, </br> <h4>${OTP}</h4> </p>`;
            mailer.sendMail(transporter.email, 'OTP VERIFICATION', msg);

            return res.status(200).json({
                success: true,
                msg: 'OTP have been sent to your email'
            });

        } catch (error) {
            console.error("Error sending OTP:", error);
            return res.status(500).send({
                status: "error",
                message: "Failed to send OTP.",
                error: error.message,
            });
        }
    }
}

module.exports = { TransporterController };



