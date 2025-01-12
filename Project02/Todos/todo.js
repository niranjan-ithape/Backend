import mongoose from "mongoose";

const todoSchame=new mongoose.Schema(
    {
        content:{
            type:true,
            required:true,

        },
        complete:{
            type:Boolean,
            default:false,


        },
        createdBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        subTodo:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"subTodo"
            }
        ]

        
    },
    {timestamps:true}
);


export const todo=mongoose.model("todo",todoSchame);