function Random(){
  let random= Math.random()*100;
  return (
    <>
      <h1 style={{backgroundColor:'red'}}>Random Number</h1>
      <p>The random number is: {random.toFixed()}</p>
    </>
  )
}

export default Random;