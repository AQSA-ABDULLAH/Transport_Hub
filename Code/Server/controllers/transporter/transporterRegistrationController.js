const Transport = require("../../models/Transporter.js");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const mailer = require("../../libs/mailer.js");

class TransporterController {
    static async generateOTP() {
        return Math.floor(100000 + Math.random() * 9000);
    }

    static async transporterRegistration(req, res) {
        console.log('Received form data:', req.body);
        try {
            const { email } = req.body;

            if (!email) {
                return res.status(422).json({ error: "Please fill in all fields properly" });
            }

            const transporterExist = await Transport.findOne({ email });

            if (transporterExist) {
                if (transporterExist.is_verified === true) {
                    return res.status(400).json({ error: "Already Verified" });
                }
                return res.status(422).json({ error: "Transporter already exists" });
            } else {
                const generatedPassword =
                    Math.random().toString(36).slice(-8) +
                    Math.random().toString(36).slice(-8);

                // Generate OTP
                const OTP = await TransporterController.generateOTP();

                // Hashing Password
                const hashedPassword = await hashPassword(generatedPassword);

                const transporter = new Transport({
                    email,
                    password: hashedPassword,
                    otp: OTP
                });

                // Send OTP
                const msg = `<p> Hi <b>${transporter.email}</b>, </br> <h4>${OTP}</h4> </p>`;
                await mailer.sendMail(transporter.email, 'OTP VERIFICATION', msg);


                const savedTransporter = await transporter.save();

                // Generate JWT Token using the saved transporter object
                const token = createToken(savedTransporter, false, '1d');

                // Save token
                savedTransporter.tokens = savedTransporter.tokens.concat({ token });
                await savedTransporter.save();

                // Send Registration mail to transporter
                const template = await compileEmailTemplate({
                    fileName: "register.mjml",
                    data: {
                        fullName: savedTransporter.fullName, // Provide the full name here
                    },
                });
                if (savedTransporter._id) {
                    try {
                        await mailer.send(savedTransporter.email, "Your Account on Transport Hub is Created Successfully", template);
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

    static async verifyOTP(req, res) {
        console.log('Received form data:', req.body);
        try {
            const { email, otp } = req.body;
            const transporter = await Transport.findOne({ email });
    
            if (!transporter) {
                return res.status(400).send({
                    status: "error",
                    message: "Transporter not found with the provided email.",
                });
            }
    
            if (transporter.is_verified) {
                return res.status(400).send({
                    status: "error",
                    message: "Transporter account is already verified.",
                });
            }
    
            if (transporter.otp !== otp) {
                return res.status(400).send({
                    status: "error",
                    message: "Incorrect OTP.",
                });
            }
    
            // Update transporter's is_verified status
            transporter.is_verified = true;
            await transporter.save();
    
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
    
}

module.exports = { TransporterController };
