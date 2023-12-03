const User = require("../../models/Users");
const { hashPassword } = require("../../helpers/hashPassword");
const { createToken } = require("../../helpers/jwt"); // Import the createToken function

class UserController {
    static userRegistration = async (req, res) => {
        try {
            const { fullName, email, phoneNumber, password, city, address } = req.body;

            if (!fullName || !email || !phoneNumber || !password || !city || !address) {
                return res.status(422).json({ error: "Please fill in all fields properly" });
            }

            const userExist = await User.findOne({ email: email });

            if (userExist) {
                return res.status(422).json({ error: "User already exists" });
            }

            // Hashing Password
            const hashedPassword = await hashPassword(password);
            const user = new User({
                fullName,
                email,
                phoneNumber,
                password: hashedPassword,
                city,
                address
            });

            const savedUser = await user.save(); // Save the user and get the saved user object

            // Generate JWT Token using the saved user object
            const token = createToken(savedUser, false, '1d');

            // Save the token
            savedUser.tokens = savedUser.tokens.concat({ token });
            await savedUser.save();

            res.status(201).json({ message: "User registered successfully", token });

        } catch (error) {
            console.error("Error in user registration:", error);
            res.status(500).json({ error: "Failed to register" });
        }
    }
}

module.exports = { UserController };