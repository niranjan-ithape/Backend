const mongoose=require('mongoose');
require('dotenv').config();
exports.database=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database Connected Succefully");
        
    })
    .catch((err)=>{
        console.error(err);
        console.log("Database Connected Issue");
        
        
    })
}