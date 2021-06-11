import React, { useState } from "react";
import Grille from "../Grille/Grille";
import Button from "../Button/Button";
import { Direction } from "../Data";

const Layout = () => {
  const [color, setColor] = useState("gray");

  const [position, setPosition] = useState(10);
  const [isClick, setIsCLick] = useState(false);

  const hautButtonHanlder = () => {
    // setColor({ newColor: "blue" });
    setPosition((position) => position - 1);
  };
  const getPosition = (position) => {
    setPosition(position);
  };
  return (
    <div>
      <Grille
        isClick={isClick}
        position={position}
        background={color}
        getPosition={getPosition}
      ></Grille>
      {/* {Direction.map((item)=><Button name={item.dir}></Button> )} */}
      <br />
      <button onClick={hautButtonHanlder}> Bas</button>
    </div>
  );
};
export default Layout;
