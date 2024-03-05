const Transport = require("../../models/Transporter");
const { createToken } = require("../../helpers/jwt");
const { passwordCompare } = require("../../helpers/hashPassword");
const Driver = require("../../models/Driver");

const transportLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please provide both email and password" });
        }

        const driver = await Transport.findOne({ email });

        if (!driver) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        // Hashing Password and Comparing
        const isMatch = await passwordCompare(password, driver.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        // Generate JWT Token
        const token = createToken(driver, false, '1d');

        // Save the token in the transporter document
        driver.tokens.push({ token });
        await driver.save();

        res.json({ status: "success", message: "Login Successful", token });

    } catch (error) {
        console.error("Error in transporter login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = transportLogin;
