import React,{useContext, useState} from "react";
import axios from "axios";
import Task from "./Task";
// import TodoContext from './context';

function Todo({todo}) {
    const [isActive, setIsActive] = useState(false); 
    // const [currentTodo,setCurrentTodo] = useContext({TodoContext});
    // EDIT
    // const handleEdit = (todoData) => {
    //     setCurrentTodo(
    //         {
    //             mode:"edit",
    //             todoData
    //         })
        
    //     // updateTodo(todoId);
    //     // setTitle("")
    //     // setTasks("")
    //     // setPriority("Low")
    // };

    // DELETE
    const handleDelete = async (todoId) => {
        const resp = await axios.delete(`/deleteTodo/${todoId}`);
        console.log(resp);
    };    
    
    return (  
        <> 
            <div className="shadow border w-full rounded mt-5 p-4" key={todo.id}>
                <div className="w-full flex justify-between items-center flex-wrap my-3">
                <div className="priority">{todo.priority}</div>    
                    <div className="w-2/3">
                        <h3 className="text-xl font-medium">{todo.title}</h3>
                        <p className="text-gray-600 text-xs">Created by <b>{todo.createdAt}</b></p>
                    </div>
                    <div className="flex justify-end grow">
                        <button className="bg-purple-700 border border-purple-200 text-white p-2 rounded leading-tight ml-3 text-sm"
                        // onClick={() => handleEdit(todo)}
                        >
                            Edit
                        </button>
                        <button className="bg-red-700 border border-red-200 text-white p-2 rounded leading-tight ml-3 text-sm"
                        onClick={() => handleDelete(todo._id)}>
                            Delete
                        </button>
                    </div>
                </div> 
                <hr className=""/>
                <div className="w-full flex justify-between mt-4 accordion-item">
                    <button className="text-md font-bold text-purple-800" onClick={() => setIsActive(!isActive)}>Tasks <span className="bg-purple-200 text-purple-700 py-1 px-3 rounded-full ml-3 text-sm">{todo.tasks.length}</span></button>
                    <h5 className="">
                    {isActive ? <span className="material-symbols-outlined">expand_less</span> : <span className="material-symbols-outlined">expand_more</span>}                
                    </h5>                
                </div>
                <div className="w-full mt-4">            
                {todo.tasks.map((task) => (
                    isActive && <div className="accordion-content"><Task task={task}></Task></div>         
                ))}           
                </div>
            </div>
        </>       
    )
}

export default Todo