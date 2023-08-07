import { useState } from "react";
import { Menu } from "./Components/Menu/Menu";
import { RotationWheel } from "./Components/RotationWheel/RotationWheel";

function App() {
  const [index,setIndex] = useState(0);
  // const[menu,setMenu]= useState('Home');
  const handleRotate = (newIndex) =>{
    setIndex(newIndex);
  }
  return (
    <div className="App">
    <Menu activeIndex={index}/>
    <RotationWheel onRotate={handleRotate} currentIndex={index}/>
    </div>
  );
}

export default App;
