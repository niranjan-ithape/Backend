import mongoose from "mongoose";
import { hospital } from "./hospital";
const patientSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        diagonesdWith:{
            type:String,
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        bloodGroup:{
            type:String,
            required:true,
          
        },
        gender:{
            type:String,
            enum:["M","F","O"],
            required:true,
        },
        admittedIn:{
            type:mongoose.Schema.Types.ObjectId,
            ref:hospital,
        }

    },
    {timestamps:true});

export const patient=mongoose.model("patient",patientSchema);