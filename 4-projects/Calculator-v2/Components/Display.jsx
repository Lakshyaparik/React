import styles from './Display.module.css'
function Display({displayValue}){
  return(
    <div className={styles.display}>{displayValue}</div>
  )
}
export default Display;