const mongoose=require('mongoose')
//define Schema 

const likeSchema=mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:post,
    },
    user:{
        type:String,
        requird:true,
    },
    

},{
    timestamps:true,
})

//export this schema 

module.exports=mongoose.model("like",likeSchema)