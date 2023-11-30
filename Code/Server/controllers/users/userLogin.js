const User = require("../../models/Users");

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Enter Username and Password" });
        }

        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);
        
        if (!userLogin) {
            res.status(400).json({ message: "User Error" });
        } else {
            res.json({ message: "User Signin Successfully" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = userLogin;