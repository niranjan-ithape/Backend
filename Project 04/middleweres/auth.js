//auth isStudent,isAdmin 

const jwt=require('jsonwebtoken');
require('dotenv').config();

exports.auth=(req,res,next)=>{
    try {
        //extract jwt token
        const token=req.body.token;
        
        if(!token)
        {
            return res.status(401).json({
                success:false,
                Message:"Token Missing",
            });
        }
    
        //verifiy the token
        try {
            const decode=jwt.verify(token,process.env.JWT_SECRT);
            console.log(decode);
    
            req.user=decode;
        } catch (err) {
            console.error(err);
            return res.status(401).json({
                success:false,
                Message:"token is invslid"
            })
            
        }

        next();
        

    } catch (error) {
        return res.status(401).json({
            success:false,
            Message:"Something went to Wrong To verifying the token "
        })
    }
}

//isStudent MiddleWare
exports.isStudent=(req,res,next)=>{
    try {
        if(req.user.role !=="Student")
        {
            return res.status(401).json({
                success:false,
                Message:"This is Protected Route for a Student"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User Role is Not a Matching"
        })
    }
}

//isAdmin Middlewere

exports.isAdmin=(req,res,next)=>{
    try {
        if(req.user.role !=="Admin")
        {
            return res.status(401).json({
                success:false,
                Message:"This is Protected Route for a Admin"
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"User Role is Not a Matching"
        })
    }
}