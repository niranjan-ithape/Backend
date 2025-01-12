const File=require('../model/File.js');
const cloudinary=require('cloudinary').v2

exports.localfileUpload=async(req,res)=>{
    try {
        //featch file
        const file=req.files.file;
        console.log(file);

        let path=__dirname+"/files"+Date.now() + `.${file.name.split('.')[1]}`;

        file.mv(path,(err)=>{
            console.log(err);
            
        })

        res.json({
            success:true,
            message:"Local File Uploaded Succefuuly"
        })
        
    } catch (error) {
        
    }
}

//image upload ka handler

//Funcation is cheeack this type is exit or not

function isFileTypeSupported(type, supportedType) {
    return supportedType.includes(type);
}


async function  uploadFileToCloudinary(file,folder)
{ 
    const options={folder}
    options.resource_type="auto"
    return await cloudinary.uploader.upload(file.tempFilePath,options)
}

exports.imageUpload=async(req,res)=>{
    try {
        //data featch
        const{name,tags,email}=req.body;
        console.log(name,tags,email);
        const file=req.files.imgFile;
        console.log(file);

        //validation
    const supportedType = ["jpg", "jpeg", "png"];
    const filetype = file.name.split('.').pop().toLowerCase(); // This ensures you get the file extension even if there are multiple dots in the file name

       if (!isFileTypeSupported(filetype, supportedType)) { // Use '!' to check if the file type is not supported
             res.status(400).json({
             success: false,
             message: "File Format not supported",
        });
}

        //file formated Supported

        const responce= await uploadFileToCloudinary(file,"Niranjan");
        console.log(responce);
        

        //db me entery save 
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:responce.secure_url,
        })
          
        res.json({
            success:true,
            message:"Image Succefully Uploaded"
        })
        

    } catch (error) {
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something Went To Wrong"
        })
    }
}


//videUpload ka handler

exports.videoUpload= async(req,res)=>{

    try {
        //data faetch 
        const{name,tags,email}=req.body;
        console.log(name,tags,email);
        const file=req.files.videoFile;
        console.log(file);
        

    //Validation
    const supportedType = ["mp4", "mov"];
    const filetype = file.name.split('.').pop().toLowerCase(); // This ensures you get the file extension even if there are multiple dots in the file name

       if (!isFileTypeSupported(filetype, supportedType)) { // Use '!' to check if the file type is not supported
             res.status(400).json({
             success: false,
             message: "File Format not supported",
        });
    }
        
        
    //file Upload on Cloudinary
    const responce= await uploadFileToCloudinary(file,"Niranjan");
    console.log(responce);


    //db me entery save 
    const fileData = await File.create({
        name,
        tags,
        email,
        imageUrl:responce.secure_url,
    })


    res.json({
        success:true,
        message:"Video Succefully Uploaded"
    })   

  } catch (error) {
        console.error(error);
        
        res.status(400).json({
            success:false,
            message:"Something Went To Wrong"
        })
    }

}
