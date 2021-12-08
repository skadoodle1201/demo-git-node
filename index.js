const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("THIS IS THE HOME PAAGE!!!!");
})



app.listen('3000',()=>{
    console.log("Listening on port 3000");
})