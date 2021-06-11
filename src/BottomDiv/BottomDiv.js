import React from "react";
import Button from "../Button/Button";
import Classes from "./BottomDiv.module.css";

const BottomDiv = () => {
  return (
    <div className={Classes.Button}>
      <Button name="S.W"></Button>
      <Button name="B"></Button>
      <Button name="S.E"></Button>
    </div>
  );
};
export default BottomDiv;
