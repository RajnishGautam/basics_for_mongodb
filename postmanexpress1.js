const express=require('express');
const app=express();
app.use(express.json());
app.get('/home',(req,res)=>{
    res.send("Welcome to home page");
});
app.post('/message',(req,res)=>{
    console.log(req.body);
    res.send("Message received");
});
app.listen(3000);
