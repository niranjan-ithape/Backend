import mongoose from "mongoose";
const productSchema=new mongoose.Schema(
    {
        descripation:{
            required:true,
            type:String,

        },
        name:{
            required:true,
            type:String,
        },
        productImage:{
            type:String,

        },
        price:{
            type:Number,
            default:0,
        },
        stock:{
            default:0,
            type:Number,
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:category,
            required:true,
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:user
        }
    },
    {timestamps:true}
)

export const product=mongoose.model("product",productSchema);