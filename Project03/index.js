const express=require('express');
const app=express();
require('dotenv').config();
const port =process.env.PORT ||8000;
//middlewer 
app.use(express.json())

//import route
const blog= require('./route/blog.js')
//mount 
app.use('/api/v1',blog);

//call Database 
const db_connect=require('./config/db_connect.js')
db_connect();

//listen 
app.listen(port,()=>{
    console.log(`Server is Started port ${port}`);
    
})
//Default Route
app.get('/',(req,res)=>{
    res.send("This is my Homepage"); 
})