const express = require ('express');
const router = express.Router();

router.post("/user_signUp", async(req, res)=>{
    // let user = new Users(req.body);
    // let result = await user.save();
    // result = result.toObject();
    // delete result.password;
    res.send(res.body);
});

router.post("/user_signIn", async(req, res)=>{
    if(req.body.password && req.body.email){
        let user = await Users.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send({result:"User Not Found"});
        }
    }
});

module.exports = router;