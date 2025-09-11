import styles from './App.module.css'
import Display from '../Components/Display'
import ButtonsContainer from '../Components/ButtonsContainer'
import { useState } from 'react'
function App() {
  let [calVal,setCalVal]=useState("");
  console.log(calVal);
  
  const handleButtonClick=(value)=>{
    if(value==='C'){
      setCalVal("");
    }else if(value === '='){
      let result = eval(calVal);
      setCalVal(result)  
    }
    else{
      setCalVal(calVal + value);
    }
  }

  return (
    <>
    <div className={styles.container}>
      <Display displayValue={calVal} ></Display>
      <ButtonsContainer handleButtonClick={handleButtonClick} ></ButtonsContainer>
    </div>
    </>
  )
}

export default App
