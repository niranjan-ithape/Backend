const express=require('express');
const router=express.Router();

//import controller
const{createTodo}=require('../controllers/createTodo.js')
const{getTodo,getTodoByid}=require('../controllers/getTodo.js')
const{updateTod}=require('../controllers/updateTodo.js')
const {deleteTodo}=require('../controllers/deleteTodo.js')

//define Controller

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/:id",getTodoByid);
router.put("/updateTod/:id",updateTod);
router.delete("/deleteTodo/:id",deleteTodo)


module.exports=router;