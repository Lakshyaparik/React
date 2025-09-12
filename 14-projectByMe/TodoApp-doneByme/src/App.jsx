import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./Appname";
import Addtodo from "./Addtodo";
import TodoItem from "./TodoItem";
import styles from "./App.module.css";
import { useState } from "react";
function App() {

  let [mydata,setMyData]=useState([
    {
      name:"Buy Milk",
      date:"13/07/2025"
    },
    {
      name:"Buy Vegtables",
      date:"14/07/2025"
    },
    {
      name:"Walk",
      date:"15/07/2025"
    },
    {
      name:"Read Book",
      date:"16/07/2025"
    },
    {
      name:"Cook Food",
      date:"17/07/2025"
    }
    
  ])
  
  let [Task,setTask] = useState('');
  let [date,setdate] = useState('');  
  
  const handleInput = (e) => {
    
    if(e.key === 'Enter'){
      setTask(e.target.value);
      e.target.value='';
    }
    
  }
  const handleDateInput = (date) =>{
    setdate(date);
    
  }
  const handleOnClickAdd = () =>{
    let newTask ={name:Task,date:date}
    setMyData([...mydata,newTask])
    setTask('')
    setdate('')
  }
  const deleteItemButton = (index) =>{
    let copy=[...mydata]
    copy.splice(index,1)
    setMyData(copy)
  }
  return (
    <>
      <center className={styles["Todo-container"]}>
        <Appname />
        <Addtodo handleInput={handleInput} handleDateInput={handleDateInput}
        handleOnClickAdd={handleOnClickAdd}/>
        <div className={styles["text-left"]}>
        <TodoItem mydata={mydata} deleteItemButton={deleteItemButton} />
        </div>
      </center>
    </>
  );
}

export default App;
