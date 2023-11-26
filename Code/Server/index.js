const express = require ('express');
const app = express();
app.use(express.json());

// For connection of DB
require('./db/connection');

app.get("/", (req,res)=>{
    res.send("Working website")
});

app.listen(6000);