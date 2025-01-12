const mongoose=require('mongoose');
require('dotenv').config();

exports.db_connect=()=>{

    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("DB Connect Succefully");
    })
    .catch((err)=>{
        console.log("Issue in Database");
        console.error(err);
        process.exit(1);
        
    })
}