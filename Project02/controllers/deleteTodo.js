const Todo=require('../models/todo.js')

exports.deleteTodo=async(req,res)=>{
    try {
        const{id}=req.params;
        await Todo.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:"Todo Deleted",
        })
    } catch (err) {

        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"Intern Server Error",
            message:err.message
        })
        
        
        
    }
}