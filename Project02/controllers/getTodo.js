const Todo = require('../models/todo.js');

exports.getTodo = async (req, res) => {
    try {
        // Fetch all todo items from the database
        const todos = await Todo.find({});

        // Send a successful response with the todos
        res.status(200).json({
            success: true,
            data: todos,
            message: "Todo data successfully fetched",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error'
        });
    }
};

exports.getTodoByid=async (req, res) => {
    try {
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});

        //data for given id not  found 
        if(!todo)
        {
            return res.ststus(404).json({
                success:false,
                message:"No Data Found For Given id "

            })
        }
        //data for Given id Found 
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id}data successfully Featched`
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: 'Server Error'
        });
    }
};
