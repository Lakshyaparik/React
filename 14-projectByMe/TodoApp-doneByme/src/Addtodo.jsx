import styles from "./Addtodo.module.css";
function Addtodo({handleInput,handleDateInput,handleOnClickAdd}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.myRow}>
          <div className={styles.addTodoRow}>
            <input type="text" id="todoid" placeholder="Enter todo here..." 
            onKeyDown={(e)=> handleInput(e)}/>
          </div>
          <div className="col-4">
            <input type="date" onChange={(e) => handleDateInput(e.target.value)
            } />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success add-button"
            onClick={handleOnClickAdd
            }>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Addtodo;
