import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let foodItems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi','kachori'];
  return(
    <>
    <h1>Food Items</h1>
    <div className="list-group">
    {foodItems.map((item)=><a key={item} href="#" className="list-group-item list-group-item-action">{item}</a>)}
</div>
    </>
  )
}

export default App
