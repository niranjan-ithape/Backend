const mongoose=require('mongoose')
const commentSchema=new mongoose.Schema({
    potst:{
        type:mongoose.Schema.Types.ObjectId,
        ref:post,

    },
    user:{
        type:String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
},
{
    timestamps:true,
});

module.exports=mongoose.model("comment",commentSchema);