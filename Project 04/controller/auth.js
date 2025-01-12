const bcrypt=require('bcrypt');
const User=require('../model/user.js');
const jwt=require('jsonwebtoken');
const { options } = require('../route/user.js');
const { now } = require('mongoose');
require('dotenv').config();

//signup route handler

exports.Signup=async(req,res)=>{

    try {
        //get data 
        const{name,email,password,role}=req.body;
        //check if user alerdy exit 
        const existingUser=await User.findOne({email});
        
        if(existingUser)
        {
            return res.status(400).json({
                success:false,
                message:"User is already exits",

            });
        }
        //secure password
        let hashPassword;
        try {
            hashPassword=await bcrypt.hash(password,10);
        } catch (err) {
            return res.status(500).json({
                success:false,
                message:"Error in hashing password",

            })
        }

        //create a user
        const user=await User.create({
           name,email,password:hashPassword,role 
        })

        res.status(200).json({
            success:true,
            message:"User Created Succefully"
        })

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success:false,
            message:"User Cannot be registerd, please try again later "
        })
        
    }
}

// Login
exports.Login=async(req,res)=>{
   try {
     const{email,password} =req.body;
     //validation on email and passsoword
     if(!email ||! password)
     {
         return res.status(400).json({
             success:false,
             message:"please Fill all deatils carefully",
         })
     }
     const user=await User.findOne({email});
     //if user not a register
     if(!user)
     {
         return res.status(401).json({
             success:false,
             message:"User is Not registerd"
         })
     }
     //create a payload to pass the sing jwt sign funcatio 
     const payload={
         email:user.email,
         id:user._id,
         role:user.role
     }
 
     //verify password and Genrate a jwt Token 
     if(await bcrypt.compare(password,user.password))
     {
         // password is match
         let token=jwt.sign(payload,process.env.JWT_SECRT,{expiresIn:"2h"});
 
         user.token=token;
         user.password=undefined;
 
         const options={
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly:true,
         }
         //cookie
         res.cookie("token",token,options).status(200).json({
             success:true,
             token,
             user,
             message:"User Logged In Succefully",
         })
 
     }
     else
     {
         //password do not match
         return res.status(403).json({
             success:false,
             message:"Password Incorrect"
         })
     }
 
   } catch (err) {
      console.error(err);
      console.log(err);
      return res.status(500).json({
        success:false,
        message:"Login Failure",

      })
      
      
   }


}