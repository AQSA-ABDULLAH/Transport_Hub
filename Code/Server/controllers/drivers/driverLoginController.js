const Driver = require("../../models/Drivers"); // Assuming the model name is 'Driver'
const { createToken } = require("../../helpers/jwt");
const { passwordCompare } = require("../../helpers/hashPassword");

const driverLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Enter Username and Password" });
        }

        const driver = await Driver.findOne({ email });

        if (!driver) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        // Hashing Password
        const isMatch = await passwordCompare(password, driver.password);

        if (!isMatch) {
            return res.status(400).json({ error: "Invalid Email or Password" });
        }

        // Generate JWT Token
        const token = createToken(driver, false, '1d');

        // Save the token in the driver document
        driver.tokens = driver.tokens.concat({ token });
        await driver.save();

        res.json({ status: "success", message: "Login Success", token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = driverLogin;
