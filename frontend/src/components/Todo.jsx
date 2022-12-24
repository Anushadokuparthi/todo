import React from "react";

function Todo({todo}) {
  return (  
    <div className="shadow border w-full rounded mt-5 p-4">
        <div className="w-full flex justify-between items-center flex-wrap my-3">
        <div className="priority">{todo.priority}</div>    
            <div className="w-2/3">
                <h3 className="text-xl font-medium">{todo.title}</h3>
                <p className="text-gray-600 text-xs">Created by <b>{todo.createdAt}</b></p>
            </div>
            <div className="flex justify-end grow">
                <button className="bg-purple-700 border border-purple-200 text-white p-2 rounded leading-tight ml-3 text-sm" onclick="{this.handleEdit()}">Edit</button>
                <button className="bg-red-700 border border-red-200 text-white p-2 rounded leading-tight ml-3 text-sm">Delete</button>
            </div>
        </div> 
        <hr className=""/>
        <div className="w-full flex justify-between mt-4">
            <button className="text-md font-bold text-purple-800">Tasks <span className="bg-purple-200 text-purple-700 py-1 px-3 rounded-full ml-3 text-sm">{todo.tasks.length}</span></button>
            <h5 className="">
                <span class="material-symbols-outlined">
                    add
                </span>                
            </h5>                
        </div>
        <div className="w-full mt-4">            
        {todo.tasks.map((task) => (
            <div className="shadow-inner border rounded w-full flex justify-between py-1 px-3 items-center mt-4">
                <div className="text-gray-700">{task}</div>
                <div className="flex justify-end grow">
                    <button className="text-purple-700 p-2 leading-tight ml-3 text-sm">
                        <span class="material-symbols-outlined">
                            edit
                        </span></button>
                    <button className="text-red-700 p-2 leading-tight ml-3 text-sm">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                    </button>
                </div>
            </div>
        ))}           
        </div>
    </div>
  )
}

export default Todo