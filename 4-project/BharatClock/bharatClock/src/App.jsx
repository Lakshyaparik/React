import Appname from "./Appname"
import TextCont from "./TextCont";
import Clock from "./Clock";
import './App.css'; // Assuming you have an App.css for styling
function App() {
  return (
    <>
    <div className="container">
    <Appname></Appname>
    <TextCont></TextCont>
    <Clock></Clock>
    </div>
    </>
  )
}

export default App
