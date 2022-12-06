// LOGIC, BL
const Todo = require("../models/todo.schema");

exports.home = (req, res) => {
  res.send("Hello  Alpha ");
};

exports.createTodo = async (req, res) => {
  try {    
    const { title, tasks, priority } = req.body;
    // To check all the details
    if (!title) {
      throw new Error("Title is Required");
    }
    
    // Inserting into the Database.
    
    const todo = await Todo.create({ title, tasks, priority });
    res.status(201).json({
      success: true,
      message: "Todo Created Successfully",
      todo,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.createTasks = async (req, res) => {
  try {
    if(req.body.tasks.length > 0){
      const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({
        success: true,
        message: "Task is Created Successfully",
        tasks:req.body.tasks,
      });
    }else{
      throw new Error("Task cannot be empty");
    }   
  } catch (error) {
    console.log(error);
  }
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: "Todo updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findByIdAndDelete(todoId);
    res.status(200).json({
      success: true,
      message: "Todo Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};