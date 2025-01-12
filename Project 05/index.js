const express=require('express');
const app=express();
require('dotenv').config();
const port=process.env.PORT ||8000

//middlwere to file upload
app.use(express.json());
const fileupload=require('express-fileupload');
app.use(fileupload(
    {
        useTempFiles : true,
        tempFileDir : '/tmp/'
    }
));

//db se connect
const db=require('./config/database.js');
db.database();

//cloud se connect
const cloudinary=require('./config/cloudinary.js')
cloudinary.cloudinaryConnect();

//api route and mount
const upload=require('./route/FileUpload.js')
app.use('/api/v1/',upload)

//app start

app.listen(port,()=>{
    console.log(`app is running at ${port}`);
    
})