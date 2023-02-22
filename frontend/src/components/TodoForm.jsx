import React,{useState} from "react";
import axios from "axios";
// import TodoContext from './context';

function TodoForm() { 
    //console.log(TodoContext,"todoMode")
    // const cdata = useContext(TodoContext);
    // const {currentTodo,setCurrentTodo} = useContext(TodoContext);
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("Low");
    const [tasks, setTasks] = useState("");
    // console.log(cdata,currentTodo)
    // if(currentTodo.mode === 'edit'){
    //     setTitle(currentTodo.data.title)
    //     setPriority(currentTodo.data.priority)
    //     setTasks(currentTodo.data.tasks)
    // }
    const handleSubmit = (e) => {
          e.preventDefault();
          const data = {
            title,
            priority,
            tasks
        }
        const newTodo = async () => {                
            const resp = await axios.post(`/createTodo`,data);
            console.log(resp)
        }
        newTodo();
        //   if(currentTodo.mode === 'create'){
           
        //   }
        //   else{
        //     const updateTodo = async() => {                
        //         const resp = await axios.put(`/editTodo/${data._id}`,data);
        //         //console.log(resp)
        //     } 
        //     updateTodo();
        //     setCurrentTodo(
        //     {
        //         mode:"create",
        //         data:{
        //             title:'',
        //             priority:'Low',
        //             tasks:[],
        //         }
        //     })
            
        //   };
          setTitle("")
          setTasks("")
          setPriority("Low")
    };
  return (
    <div className="shadow border w-full rounded mt-5 p-4">
        <h2>New Todo</h2>
        <form onSubmit={handleSubmit}>
            <div className="flex w-full gap-2">
            <div className="w-1/2 my-2">
                <label className="text-sm text-gray-600 my-2">Todo Title</label>
                    <input className="w-full placeholder:italic placeholder:text-purple-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 sm:text-sm p-2" placeholder="Add title"
                type="text"
                name="title" 
                id="todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="w-1/2 my-2">
                <label className="text-sm text-gray-600 my-2">Priority</label>
                    <select type="dropdown" name="priority" id="priority"  className="w-full placeholder:italic placeholder:text-purple-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 sm:text-sm p-2" 
                    placeholder="Add title"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div> 
            </div>
                                    
            <label className="text-sm text-gray-600">Tasks</label>
            <input className="placeholder:italic placeholder:text-purple-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:ring-1 sm:text-sm p-2" placeholder="Add title"
                type="text"
                name="tasks"
                id="tasks"
                value={tasks}
                onChange={(e) => setTasks(e.target.value)} />
            <button type="submit" className="flex justify-end mt-3 bg-purple-700 border border-purple-200 text-white p-2 rounded leading-tight text-sm">Submit</button>
        </form>
    </div>
  )
}

export default TodoForm