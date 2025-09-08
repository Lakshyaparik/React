import styles from './Container.module.css'
const Container = ({children,password,userInput}) =>{
  return(
    <div className={styles.container}>
      {children}
      <br />
      <span>Values : {userInput}</span>
      <span>{password}</span>
    </div>
  )
}
export default Container