import React, { useState } from "react";
import Grille from "../Grille/Grille";
import Button from "../Button/Button";
import { Direction } from "../Data";
import BlockButton from "../BlockButton/BlockButton";

const Layout = () => {
  //const [color, setColor] = useState("gray");

  const [position, setPosition] = useState(10);

  const hautButtonHanlder = () => {
    setPosition((position) => position - 1);
  };
  const getPosition = (position) => {
    setPosition(position);
  };
  return (
    <div>
      <Grille position={position} getPosition={getPosition}></Grille>
      {/* {Direction.map((item)=><Button name={item.dir}></Button> )} */}
      {/* <br />
      <button onClick={hautButtonHanlder}> Bas</button> */}
      <BlockButton></BlockButton>
    </div>
  );
};
export default Layout;
