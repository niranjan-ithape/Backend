const express= require('express');
const app=express();

const bodyParser=require('body-parser')

app.use(bodyParser.json());

app.listen(3000,()=>{
    console.log("Server started has Port Number 3000");
    
})

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.post('/api/cars',(req,res)=>{
    const{name,brand}=req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Succefully");
    
})

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/DemoDb')
.then(()=>{
    console.log("Connection Succefully");
    
}).catch((err)=>{
    console.error(err);
    
})