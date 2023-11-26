const express = require ('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

const Transporter = require('./models/Transporter');

// For connection of DB
require('./db/connection');

app.post("/register", async(req, res)=>{
    let transporters = new Transporter(req.body);
    let result = await transporters.save();
    // result = result.toObject();
    // delete result.password;
    res.send(result);
});

app.listen(6000);