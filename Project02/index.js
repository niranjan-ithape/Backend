const express=require('express');
const app=express();
require("dotenv").config();

const port=process.env.PORT || 3000;

app.use(express.json());

app.listen(port,()=>{
    console.log("Server Started Succefully in Port Number 3000");
    
})

//import routes for todo api
const todoRoutes=require('./route/todos.js');
//mount the todo api Routes

app.use("/api/v1",todoRoutes);

//connection of db 

const dbConnect=require('./config/database.js');
dbConnect();

//default Route

app.get("/",(req,res)=>{
    res.send(" This is HomePage Baby")
})