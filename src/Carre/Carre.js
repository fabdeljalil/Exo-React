import React from "react";

import Classes from "./Carre.module.css";

const Carre = (props) => {
  const { background } = props;
  const { getPosition } = props;
  const { id } = props;
  const { isSelected } = props;
  return (
    <div
      className={Classes.maDiv}
      style={{ backgroundColor: isSelected ? "blue" : "gray" }}
      id={id}
      onClick={() => getPosition(id)}
    ></div>
  );
};
export default Carre;
