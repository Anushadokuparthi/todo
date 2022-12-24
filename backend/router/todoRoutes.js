// URL PATH
const express = require("express");
const {
  home,
  createTodo,
  createTasks,
  getTodos,
  editTodo,
  deleteTodo,  
  searchTodos,
} = require("../controller/todoController");
const router = express.Router();

router.get("/", home);
router.post("/createTodo", createTodo);
router.post("/createTasks/:id", createTasks);
router.get("/getTodos", getTodos);
router.put("/editTodo/:id", editTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get("/searchTodos/:id", deleteTodo);

module.exports = router;