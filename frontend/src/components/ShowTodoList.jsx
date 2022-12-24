import { useState, useEffect } from 'react';
import axios from "axios";
import Todo from './Todo';
function ShowTodoList() {
    const [todo,setTodo] = useState([]);
    const fetchTodo = async () => {
        const resp = await axios.get("/getTodos");
        console.log(resp);
    
        // if No todos are there please dont set the values
        if (resp.data.todos.length > 0) {
          setTodo(resp.data.todos);
        }
      };
    useEffect(() => {
        fetchTodo();
    },[todo]);
  return (
    <div>
      <div className="min-h-screen bg-gray-300">
        <div className="container mx-auto p-10 max-w-screen-lg">
        <div className="bg-white rounded shadow p-8">
          <div className="flex justify-between mt-8 flex-wrap lg:justify-center">
            {todo.map((todo) => (
              <Todo todo={todo}></Todo>
            ))}
          </div>
      </div>   
      </div>  
    </div>
    </div>
  )
}

export default ShowTodoList;