import React from "react";
import Button from "../Button/Button";
import Classes from "./MiddleDiv.module.css";
const MiddleDiv = () => {
  return (
    <div className={Classes.maDiv}>
      <Button name="G"></Button>
      <Button name="D"></Button>
    </div>
  );
};
export default MiddleDiv;
