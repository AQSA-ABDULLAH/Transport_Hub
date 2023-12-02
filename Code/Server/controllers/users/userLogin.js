const User = require("../../models/Users");
const jwt = require("jsonwebtoken");
const { passwordCompare } = require("../../helpers/hashPassword");

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Enter Username and Password" });
        }

        const userLogin = await User.findOne({ email: email });
        console.log(userLogin);

        if (userLogin) {
            //Hashing Password
            const isMatch = await passwordCompare(password, userLogin?.password);
            const token = userLogin.generateAuthToken();
            if (!isMatch) {
                return res.send({ status: "400", message: "Invalid Email or Password", });
            } else{
                res.json({ message: "User Signin Successfully" });
            }
        } else {
            res.status(400).json({ message: "Invalid Email or Password" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = userLogin;