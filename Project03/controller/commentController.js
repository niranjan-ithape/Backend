//import model 
const post =require('../models/postModel.js');
const comment= require('../models/commentModel.js');

//business Logic

exports.createComment=async (req,res)=>{
    try {
        //fetch data from req body
        const{post,user,body}=req.body;
        //create Comment object
        const Comment=new comment({
            post ,user,body
        })

        //save the new comment into the database 
        const savedComment=await Comment.save();
    } catch (error) {
        
    }
}