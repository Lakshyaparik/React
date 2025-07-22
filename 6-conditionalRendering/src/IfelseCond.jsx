function IfelseCond() {
  let foodItems = [];
  if(foodItems.length === 0) {
    return <h1>No Food Items Available</h1>;  
  }
  else{
    return(
    <>
    <h1>Food Items</h1>
    <div className="list-group">
    {foodItems.map((item)=><a key={item} href="#" className="list-group-item list-group-item-action">{item}</a>)}
</div>
    </>
  )
  }
}
export default IfelseCond