//children passing
//in this inputvalues not updating in UI 
//to make it work use state
// import React, { useState } from "react";
//in 11 folders
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./Container";
import styles from "./App.module.css";
import { useState } from "react";
function App() {
  let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi", "kachori"];

  const handleBuy = (item) => {
    console.log("You bought " + item);
  };

  // let input= useState();
  // let inputValue= input[0];
  // let setInputValue= input[1];

  //console.log(`Input value: ${inputValue}`);
  //console.log(`Set Input value: ${setInputValue}`);
  

  //shorthand of above 3 lines
  const [inputValue, setInputValue] = useState("Enter the text here");


  return (
    <>
      <Container userInput={inputValue} >
        <input type="text" onChange={(e)=>{
          setInputValue(e.target.value)

        }} />
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
                onClick={(e) => console.log(e)}
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
