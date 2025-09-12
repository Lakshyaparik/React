import styles from "./TodoItems.module.css";
function Todoitems({itemName,itemDate,index,deleteItemButton}) {
  return (
    <>
      <div className={styles.container + " container"}>
        <div className={styles.myRow + " row"}>
          <div className="col-6">{itemName}</div>
          <div className="col-4">{itemDate}</div>
          <div className={styles.deleteButton + " col-2"}>
            <button type="button" className="btn btn-danger"
            onClick={(e)=>deleteItemButton(index)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todoitems;

