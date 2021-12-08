const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("THIS IS THE HOME PAAGE!!!!");
})

app.get('/feature',(req,res)=>{
    res.send("This is a Feature Branch");
})


app.listen('3000',()=>{
    console.log("Listening on port 3000");
})