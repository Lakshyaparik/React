import styles from "./Addtodo.module.css";
function Addtodo() {
  return (
    <>
     <div className={styles.container}>
          <div className={styles.myRow}>
            <div className={styles.addTodoRow}>
              <input type="text" id="todoid" placeholder="Enter todo here..."/>
            </div>
            <div className="col-4">
              <input type="date" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success add-button">Add</button>
            </div>
          </div>
        </div>
    </>
  )
}
export default Addtodo;