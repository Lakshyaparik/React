function NewCom() {

  let message = "Hello,lakshya";

  return (
    <div>
      <h1>New Component</h1>
      <p>This is a new component in the dynamic component directory.{message}</p>
    </div>
    // The NewCom component displays a message dynamically
    //we can add js in jsx with the help of curly braces
  );
}

export default NewCom;