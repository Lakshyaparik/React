import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./Appname";
import Addtodo from "./Addtodo";
import TodoItem from "./TodoItem";
import './App.css'
function App() {
  return (
    <>
      <center className="Todo-container">
        <Appname />
        <Addtodo />
        <div className="text-left">
        <TodoItem />
        <TodoItem/>
        </div>
      </center>
    </>
  );
}

export default App;
