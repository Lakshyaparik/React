import Child from "./Child"
function Parent(){
  
  function greet(name){
    console.log(`Hello ${name}, Good Morning`)
  }
  return(
    <>
    <Child greetUser={greet}></Child>
    </>
  )
}
export default Parent