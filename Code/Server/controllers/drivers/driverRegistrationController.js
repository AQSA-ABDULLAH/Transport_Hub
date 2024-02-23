const Driver = require("../../models/Drivers");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const sendMail = require("../../libs/mail.js");

class DriverController {
    static driverRegistration = async (req, res) => {
        try {
            const {email, password} = req.body;

            if (!email || !password) {
                return res.status(422).json({ error: "Please fill in all fields properly" });
            }

            const userExist = await User.findOne({ email: email });

            if (userExist) {
                return res.status(422).json({ error: "User already exists" });
            }

            // Hashing Password
            const hashedPassword = await hashPassword(password);
            const user = new User({
                email,
                password: hashedPassword
            });

            const savedUser = await user.save(); // Save the user and get the saved user object

            // Generate JWT Token using the saved user object
            const token = createToken(savedUser, false, '1d');

            // Save token
            savedUser.tokens = savedUser.tokens.concat({ token });
            await savedUser.save();

            //Send Registration mail to user
            const template = await compileEmailTemplate({
                fileName: "register.mjml",
                data: {
                    fullName,
                },
            });
            if (savedUser._id) {
                try {
                    await sendMail(email, "Your Account on Transport Hub is Created Successfully", template);
                    res.status(201).send({
                        status: "success",
                        message: "User created successfully",
                        token: token,
                    });
                } catch (error) {
                    res.status(201).send({
                        status: "success",
                        message: "User created successfully",
                        token: token,
                        email: "Failed to send Create User email.",
                    });
                }
            }

            //res.status(201).json({ message: "User registered successfully", token });

        } catch (error) {
            console.error("Error in user registration:", error);
            res.status(500).json({ error: "Failed to register" });
        }
    }
}

module.exports = { DriverController };