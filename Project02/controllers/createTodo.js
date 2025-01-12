const Todo=require('../models/todo.js');
//define Route Handler

exports.createTodo=async(req,res)=>{
    try {
        //extract title and Descripation of the body 
         const {title,description}=req.body;
         //create a new Todo Object and insert in db 
         const response=await Todo.create({title,description});
         //send a json response with succes Flag
         res.status(200).json({
            success:true,
            data:response,
            message:"Entery Created Succefully"
         })

        } catch (err) {
            console.error(err);
            console.log(err);
            res.status(500).json({
                success:false,
                data:"Internal Server Error",
                message:err.message
                
            })
            

        
    }
}
