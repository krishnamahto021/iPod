import { useState } from "react";
import { Menu } from "./Components/Menu/Menu";
import { RotationWheel } from "./Components/RotationWheel/RotationWheel";
import { MenuItems } from "./Components/MenuItems/MenuItems";

function App() {
  const [index, setIndex] = useState(0);
  const [menu, setMenu] = useState(null);
  const [onMenu, setOnMenu] = useState(false);
  const handleRotate = (newIndex) => {
    setIndex(newIndex);
  };
  return (
    <div className="App">
      {onMenu ? (
        <MenuItems menu={menu} />
      ) : (
        <Menu activeIndex={index} setMenu={setMenu} setOnMenu={setOnMenu} />
      )}

      <RotationWheel
        onRotate={handleRotate}
        currentIndex={index}
        setMenu={setMenu}
        onMenu={onMenu}
        setOnMenu={setOnMenu}
      />
    </div>
  );
}

export default App;
