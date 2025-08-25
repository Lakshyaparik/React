import styles from './Container.module.css'
const Container = ({children,password}) =>{
  return(
    <div className={styles.container}>
      {children}
      <span>{password}</span>
    </div>
  )
}
export default Container