import StudentInfo from "../components/StudentInfo";
function App() {
    let studentsName = [
      "Lakshya",
      "shivam",
      "Ankit",
      "Aman",
      "Sahil",
      "Saurabh",
      "Anshul",
      "Aakash",
      "Aman",
      "Ankit",
      "Aman",
      "Ankit",
      "Aman",
      "Ankit",
      "Aman",
      "Ankit",
    ];
    let studentsAge = [
      20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
    ];
  return (
    <>
      <h1>props</h1>
      <hr />
      <br />
      {
        studentsName.map((name,index)=>(
          <StudentInfo name={name} key={index} age={studentsAge[index]}></StudentInfo>
        ))
      }
      <br />
      <hr />
    </>
  );
}

export default App;
