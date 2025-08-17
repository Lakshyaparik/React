function Cond(){
  
  //condtional redendering 
  //if else condition
  //logical operators
  //ternary operator

  // let age = 20;
  let myitems = ["item1", "item2", "item3", "item4"];
  return(
    <>
      {/* <h1>ternary operator condition</h1> */}
       {/* {age >=18 && <h2>you are eligible</h2>} */}

      {myitems.length === 0 && <h1>emty items</h1>}
      <ul>
        {myitems.map((item)=><li key={item} className="list items" >{item}</li>)}
      </ul>
    </>
  )
}
export default Cond