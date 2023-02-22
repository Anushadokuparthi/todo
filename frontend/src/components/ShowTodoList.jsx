import { useState, useEffect } from 'react';
import axios from "axios";
import Todo from './Todo';
function ShowTodoList() {
  const [todo,setTodo] = useState([]); 
   
  const fetchTodo = async () => {
      const resp = await axios.get("/getTodos");
      //console.log(resp);
  
      // if No todos are there please dont set the values
      if (resp.data.todos.length > 0) {
        setTodo(resp.data.todos);
      }
  };
  useEffect(() => {
      fetchTodo();
  },[todo]);

  
  return (
    <div className="flex justify-between mt-8 flex-wrap lg:justify-center">
      {todo.map((todo) => (
        <Todo todo={todo}></Todo>
      ))}
    </div>
  )
}

export default ShowTodoList;