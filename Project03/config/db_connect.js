const mongoose= require('mongoose');
require('dotenv').config();

const db_connect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(console.log("DB Connect Succefully")
    )
    .catch((err)=>{
        console.error(err);
        console.log("DB Connecation Failed");
        process.exit(1);        
    })
}

module.exports=db_connect;