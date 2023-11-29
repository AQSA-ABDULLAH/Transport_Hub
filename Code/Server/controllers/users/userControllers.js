import UserModel from "../../models/Users.js";

class UserController {

}

app.post("/user_register", async(req, res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});