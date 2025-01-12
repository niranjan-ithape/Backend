const mongoose=require('mongoose');
const fileSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    imageUrl:{
        type:String,
        required:true,

    },
    tags:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    }
},
{
    timestamps: true
})

module.exports=mongoose.model("File",fileSchema)
