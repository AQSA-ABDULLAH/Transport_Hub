const User = require("../../models/Users");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt");
const compileEmailTemplate = require("../../helpers/compile-email-template.js");
const sendMail = require("../../libs/mail.js");

class UserController {
    static userRegistration = async (req, res) => {
        try {
            const { firstName, lastName, email, phoneNumber, password, confirmPassword, city, zipCode, address, profilePicture } = req.body;

            if (!firstName || !email || !password || !confirmPassword ) {
                return res.status(422).json({ error: "Please fill in all fields properly" });
            }

            const userExist = await User.findOne({ email: email });

            if (userExist) {
                return res.status(422).json({ error: "User already exists" });
            }

            if (password !== confirmPassword)
                return res.send({
                    status: "failed",
                    message: "Password and Confirm Password doesn't match",
                });

            // Hashing Password
            const hashedPassword = await hashPassword(password);
            const user = new User({
                firstName,
                lastName,
                email,
                phoneNumber,
                password: hashedPassword,
                city,
                zipCode,
                address,
                profilePicture
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
                    fullName: `${firstName} ${lastName}`,
                },
            });
            
            try {
                await sendMail(email, "Your Account on Transport Hub is Created Successfully", template);
                return res.status(201).send({
                    status: "success",
                    message: "User created successfully",
                    token: token,
                });
            } catch (error) {
                console.error("Failed to send Create User email:", error);
                return res.status(201).send({
                    status: "success",
                    message: "User created successfully",
                    token: token,
                    email: "Failed to send Create User email.",
                });
            }

        } catch (error) {
            console.error("Error in user registration:", error);
            return res.status(500).json({ error: "Failed to register" });
        }
    }
}

module.exports = { UserController };
