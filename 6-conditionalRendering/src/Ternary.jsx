function Ternary() {
  let foodItems = ['Pizza', 'Burger', 'Pasta', 'Salad', 'Sushi'];
    return(
    <>
    <h1>Food Items</h1>
    {foodItems.length == 0 ? <p>No food items available</p> : <p>We have {foodItems.length} food items available</p>}
    </>
  )
}
export default Ternary