const express=require('express');
const router=express.Router();

const{Login,Signup}=require('../controller/auth.js');
const{auth,isStudent,isAdmin}=require('../middleweres/auth.js')

router.post("/login",Login);
router.post("/singup",Signup);

router.get("/test",auth, (req,res)=>{
    res.json({
        success:true,
        message:"Welcome To The Protected Route Testing",
    })
})

//protected Route
router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome To The Protected Route Student",
    });
})

router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome To The Protected Route Student",
    });

})
module.exports=router;