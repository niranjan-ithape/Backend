import mongoose from "mongoose";

const orderIteamSchema=new mongoose.Schema(
    {
        productId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:product,
        },
        quantity:{
            type:Number,
            required:true,
        }
    })



const orderSchema=new mongoose.Schema(
    {
        orderPrice:{
            type:Number,
            required:true,
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:user,
        },
        orderItems:{
            type:[orderIteamSchema],
        },
        address:{
            type:String,
            required:true,
        },
        status:{
            type:String,
            enum:["PENDING","CANCELLED","DELIVERED"],
            default:"PENDING",
        }
    },
    {timestamps:true})
export const order=mongoose.model("order",orderSchema);