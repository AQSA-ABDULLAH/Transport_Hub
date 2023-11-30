const express = require('express');
const { UserController } = require('../controllers/users/userRegistration'); // Change the import to use named import
const router = express.Router();


//Additional code
const User = require("../models/Users");
require("../db/connection")

router.post("/user_signUp", UserController.userRegistration);


//Additional code
router.post('/user_signIn', async (req,res) => {
    try{
        const { email, password } =req.body;

        if (!email || !password){
            return res.status(400).json({error:"Enter Username and Password"})
        }

        const userLogin = await User.findOne({email: email});
        console.log(userLogin);
        if(!userLogin){
            res.status(400).json({message: "User Error"});
        }else{
            res.json({message: "User Signin Successfully"});   
        }

    }catch(error){
        console.log(error)
    }
})

module.exports = router;
