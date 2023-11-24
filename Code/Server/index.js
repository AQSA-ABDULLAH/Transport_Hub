const express = require ('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("Working website")
});

app.listen(6000);