const express = require ('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const Users = require('./models/Users');
const Transporter = require('./models/Transporter');

// For connection of DB
require('./db/connection');

app.post("/register", async(req, res)=>{
    const transporter = new Transporter(req.body);
    let result = await transporter.save();
    // result = result.toObject();
    // delete result.password;
    res.send(result);
});

app.post("/user_register", async(req, res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

app.post("/user_signIn", async(req, res)=>{
    if(req.body.password && req.body.email){
        let user = await Users.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send({result:"User Not Found"});
        }
    }
});

app.get("/",(req,res)=>{
    res.send("app is working")
})

app.listen(5000);