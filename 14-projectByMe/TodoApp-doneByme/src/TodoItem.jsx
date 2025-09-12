import Todoitems from "./TodoItems";
function TodoItem({mydata,deleteItemButton}) {
  return (
    <>
    {mydata.map((data,index)=>{
      return <Todoitems itemName={data.name} itemDate={data.date} key={index} index={index}
      deleteItemButton={deleteItemButton}
      ></Todoitems>
    })}
    </>
  );
}

export default TodoItem;
