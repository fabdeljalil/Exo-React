import React from "react";
import TopDiv from "../TopDiv/TopDiv";
import MiddleDiv from "../MiddleDiv/MiddleDiv";
import BottomDiv from "../BottomDiv/BottomDiv";
import Classes from "./BlockButton.module.css";

const BlockButton = () => {
  return (
    <div className={Classes.maDiv}>
      <TopDiv></TopDiv>
      <MiddleDiv></MiddleDiv>
      <BottomDiv></BottomDiv>
    </div>
  );
};
export default BlockButton;
