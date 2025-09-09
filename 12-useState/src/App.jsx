import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import styles from "./App.module.css";
import { useState } from "react";
function App() {

  let [foodItems, setFoodItems] = useState(["Pizza", "Burger", "Pasta", "Salad", "Sushi", "kachori"]);

  let [boughtItem,setBoughtItem]=useState([]);

  const handleBuyItem = (e,item) =>{
    let newItem=item;
    setBoughtItem([...boughtItem,newItem]);
    alert(`You have bought ${newItem}`);
    e.target.parentElement.classList.add('active')
    
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {

      let newFoodItem = e.target.value;
      setFoodItems([...foodItems, newFoodItem]);
      e.target.value = '';

    }
  }

  return (
    <>
      <Container>
        <input type="text" onKeyDown={handleKeyDown} />
      </Container>
      <Container>
        <h1>Food Items</h1>
        <div className="list-group">
          {foodItems.map((item) => (
            <a
              key={item}
              href="#"
              className="list-group-item list-group-item-action"
            >
              {item}
              <button
                className={`${styles.buttons}  btn btn-success `}
                onClick={(e)=>handleBuyItem(e,item)}
              >
                Buy
              </button>
            </a>
          ))}
        </div>
      </Container>
      <Container password="12345">
        <p>
          This is another container. You can put any content you like here, such
          as text, images, or other components.
        </p>
      </Container>
    </>
  );
}

export default App;
