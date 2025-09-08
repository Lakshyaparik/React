import styles from './Container.module.css'
const Container = ({children,password,inputValues}) =>{
  return(
    <div className={styles.container}>
      {children}
      <br />
      <span>Values : {inputValues}</span>
      <span>{password}</span>
    </div>
  )
}
export default Container