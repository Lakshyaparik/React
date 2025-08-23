import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./Appname";
import Addtodo from "./Addtodo";
import TodoItem from "./TodoItem";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <center className={styles["Todo-container"]}>
        <Appname />
        <Addtodo />
        <div className={styles["text-left"]}>
        <TodoItem />
        </div>
      </center>
    </>
  );
}

export default App;
