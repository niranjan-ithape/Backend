const mongoose=require('mongoose');

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database Connect Succefully");
        
    })
    .catch((err)=>{
        console.log("Issue in Database");       
        console.error(err.message);
        process.exit(1);
        
    })
}

module.exports=dbConnect;