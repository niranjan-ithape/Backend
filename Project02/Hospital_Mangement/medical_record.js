import mongoose from "mongoose";
const medicalReportSchema=new mongoose.Schema(
    {

    },
    {timestamps:true})

export const medicalreport=mongoose.model("medicalreport",medicalReportSchema);