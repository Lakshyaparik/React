// import "./StudentInfo.css";

import styles from "./StudentInfo.module.css";

// Using CSS Modules to style the component


function StudentInfo({name, age}) {
  // Destructuring props to get name and age
  return (
    <>
    <h2 className={styles.heading}>Student Name : {name}</h2>
    <h2>Student Age : {age}</h2>

    </>
  )
}


export default StudentInfo;