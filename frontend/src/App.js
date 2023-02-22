import './App.scss';
import ShowTodoList from './components/ShowTodoList';
import TodoForm from './components/TodoForm';
// import TodoContext from './components/context';

function App() {
  // const initialContext = {
  //   mode:"create",
  //   data:{
  //       title:'',
  //       priority:'Low',
  //       tasks:[],
  //   }
  // }
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-300">
        <div className="container mx-auto p-10 max-w-screen-lg">
          <div className="bg-white rounded shadow p-8">
          <ShowTodoList></ShowTodoList>
          <TodoForm></TodoForm>           
            {/* <TodoContext.Provider value={initialContext}>
              <h1>Hello</h1>
            </TodoContext.Provider>             */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
