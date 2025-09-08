function Child({greetUser}){

  let Output='lakshya';
  
  function handleInput(e){
    console.log(Output)
    Output=e.target.value;
    console.log(Output);
    
  }

  return(
    <>
    <p>Clicks the buttons</p>
    <input type="text" id="abc" onChange={handleInput} />
    <br />
    <span>{Output}</span>
    <hr />
    <br />
    <button onClick={()=>greetUser("lakshya")} >Greet Lakshya's</button>
    </>
  )
}
export default Child