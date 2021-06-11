import React from "react";
import Carre from "../Carre/Carre";
import Classes from "./Grille.module.css";
import { gridCheck } from "../Data";

function remplireTab(i, j) {
  const tab2D = [];
  let compteur = 0;
  for (let indexi = 0; indexi < i; indexi++) {
    tab2D.push([]);
    for (let indexj = 0; indexj < j; indexj++) {
      compteur++;
      tab2D[indexi].push(compteur);
    }
  }
  return tab2D;
}

function remplire() {
  let tab5 = [];
  for (let indexi = 0; indexi < 90; indexi++) {
    tab5.push(indexi);
  }
  return tab5;
}

const f = (background, getPosition, position) => {
  //const tab2D = remplireTab(10, 9);
  const tab2D = remplire();

  return tab2D.map((item) => {
    return (
      <Carre
        id={item}
        background={background}
        getPosition={getPosition}
        isSelected={position === item}
      ></Carre>
    );
  });
  // tab2D.map((ligne) =>
  //   ligne.map((item) => {
  //     return <Carre id={item} background={background}></Carre>;
  //   })
  // );
};

// const t = (matrice, position) => {
//   console.log(matrice);
//   console.log(matrice[position]);
//   console.log(matrice[position].props.background);

//   matrice[position].props.background = "blue";
//console.log(matrice[position].props.background);

// let a = [...b];
// console.log(position);
// console.log(a);

// console.log(a[position]);

// return (a[position].props.background = "blue");
// b.map((item) => {
//   if (item === position) {
//     console.log(position);

//     return <Carre id={item} background={background}></Carre>;
//   }
//   return b;
// });
//};

const Grille = (props) => {
  const { background } = props;

  const { isClick } = props;
  const { position } = props;
  const { getPosition } = props;

  const matrice = f(background, getPosition, position);
  return (
    <div className={Classes.maDiv}>
      {matrice}
      {/* {console.log(isClick)}
      {console.log(position)}
      {console.log(background)} */}

      {/* //{isClick && t(matrice, position)} */}
    </div>
  );
};
export default Grille;
