function Clock(){
  return(
    <>
      <h2>Today Date</h2>
      <p>{new Date().toLocaleDateString()}</p>
      <h2>Current Time</h2>
      <p>{new Date().toLocaleTimeString()}</p>
    </>
  )
}
export default Clock;