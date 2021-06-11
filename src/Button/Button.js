import React, { useState } from "react";
const Button = (props) => {
  const { name } = props;
  return <button>{name}</button>;
};
export default Button;
