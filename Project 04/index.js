const express =require("express");
const app=express();
require('dotenv').config();

const port=process.env.PORT || 8000

app.use(express.json());

require('./config/database.js').db_connect();

//route import and mount 
const user=require('./route/user.js')
//mount the api
app.use("/api/v1",user)

//active the server 

app.listen(port,()=>{
    console.log(`App is Listing at ${port}`);
    
})