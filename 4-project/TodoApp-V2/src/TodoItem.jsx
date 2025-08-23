import Todoitems from "./TodoItems";
function TodoItem() {
  const mydata=[
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

  ]
  return (
    <>
    {mydata.map((data,index)=>{
      return <Todoitems itemName={data.name} itemDate={data.date} key={index}></Todoitems>
    })}
    </>
  );
}

export default TodoItem;
