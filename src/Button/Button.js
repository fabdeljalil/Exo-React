import React, { useState } from "react";
import Classes from "./Button.module.css";

const Button = (props) => {
  const { name } = props;
  return <button className={Classes.Button}>{name}</button>;
};
export default Button;
