import styles from './Display.module.css'
import { useState } from 'react'
function Display({userInput}){
  
  return(
    <div className={styles.display}>{userInput}</div>
  )
}
export default Display;