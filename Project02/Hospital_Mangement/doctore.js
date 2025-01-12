import mongoose from "mongoose";
import { hospital } from "./hospital";
const doctoreSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        salary:{
            type:Number,
            required:true,
        },
        qualifications:{
            type:String,
            required:true,
        },
        experienceInYears:{
            type:Number,
            required:true,
            default:0
        },
        workInHospital:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:hospital
            }

        ]
            

        

    },
    {timestamps:true})

export const doctore=mongoose.model("doctore",doctoreSchema);