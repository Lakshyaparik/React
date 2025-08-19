function TodoItem(){
  let itemName= "Buy Milk";
  let itemDate= "13/07/2025";
  return <>
   <div className="container">
           <div className="row my-row">
            <div className="col-6">
             {itemName}
            </div>
            <div className="col-4">
              13/07/2025
            </div>
            <div className="col-2 delete-button">
             <button type="button" className="btn btn-danger">{itemDate}</button>
            </div>
          </div>
        </div>
  </>
}

export default TodoItem;