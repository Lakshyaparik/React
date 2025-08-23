function StudentInfo({name, age}) {
  // Destructuring props to get name and age
  return (
    <>
    <h2>Student Name : {name}</h2>
    <h2>Student Age : {age}</h2>
    </>
  )
}
export default StudentInfo;