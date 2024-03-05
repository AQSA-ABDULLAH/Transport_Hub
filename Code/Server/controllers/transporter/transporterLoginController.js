const Transporter = require("../../models/Transporter");
const { createToken } = require("../../helpers/jwt");
const { passwordCompare } = require("../../helpers/hashPassword");

const transportLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please provide both email and password" });
        }

        const transporter = await Transporter.findOne({ email });

        if (!transporter) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        // Hashing Password and Comparing
        const isMatch = await passwordCompare(password, transporter.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        // Generate JWT Token
        const token = createToken(transporter, false, '1d');

        // Save the token in the transporter document
        transporter.tokens.push({ token });
        await transporter.save();

        res.json({ status: "success", message: "Login Successful", token });

    } catch (error) {
        console.error("Error in transporter login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = transportLogin;

