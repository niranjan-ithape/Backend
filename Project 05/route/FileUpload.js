const express=require('express');
const router=express.Router();

const{imageUpload,videoUpload,imageReducerUpload,localfileUpload}=require('../controller/fileupload.js');

//api router
router.post('/localfileUpload',localfileUpload);
router.post('/imageUpload',imageUpload);
router.post('/videoUpload',videoUpload);



module.exports =router;