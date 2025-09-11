import styles from "./App.module.css";
import Display from "../Components/Display";
import ButtonsContainer from "../Components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [operator, setOperator] = useState(null);
  let [firstInputState, setFirstInputState] = useState(null);
  let [secondInputState, setSecondInputState] = useState(null);
  let [resultState, setResultState] = useState(null);

  const [userInput, setUserInput] = useState([]);

  console.log("first", firstInputState);
  console.log("second", secondInputState);
  console.log("operator", operator);
  // Function to handle user input
  const handleUserInput = (value) => {
    setUserInput([...userInput, value]);
  };

  const handleDisplay = (value) => {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      setOperator(value);

      if (firstInputState === null) {
        setResultState(null);
        setFirstInputState(userInput.join(""));
        setUserInput([]);
      }
    }
    if (value === "=" && operator !== null && firstInputState !== null) {
      setSecondInputState(userInput.join(""));
      setResultState(null);
      let restult;

        switch (operator) {
          case "+":
            restult =
              parseFloat(firstInputState) + parseFloat(userInput.join(""));
            setResultState(restult);
            setUserInput([restult]);
            break;
          case "-":
            restult =
              parseFloat(firstInputState) - parseFloat(userInput.join(""));
            setResultState(restult);
            setUserInput([restult]);
            break;
          case "*":
            restult =
              parseFloat(firstInputState) * parseFloat(userInput.join(""));
            setResultState(restult);
            setUserInput([restult]);
            break;
          case "/":
            restult =
              parseFloat(firstInputState) / parseFloat(userInput.join(""));
            setResultState(restult);
            setUserInput([restult]);
            break;
          default:
            console.log("something went wrong");
            break;
      }
      if(resultState !== null){
        setFirstInputState(resultState);
        setSecondInputState(null);
        setOperator(null);
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <Display userInput={userInput}></Display>
        <ButtonsContainer
          handleDisplay={handleDisplay}
          userInput={handleUserInput}
        ></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
