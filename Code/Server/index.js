// Express
const express = require ('express');
const app = express();
app.use(express.json());

// Cors
const cors = require('cors');
app.use(cors());

//Dot Env
const dotenv = require("dotenv");
dotenv.config({path:"./config.env"})

// For connection of DB
require('./db/connection');

//Routes
app.use(require('./routes/user'))

//For Server Port
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}`);
})

app.get("/", (req, res) => {
    res.send("api is working");
});
