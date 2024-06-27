import React from "react";
import utils from "../../styles/utils.module.css";
import styles from "../../styles/transitions/tLogo.module.css";

const imagePositions = [
  { top: "10%", left: "20%" },
  { top: "3%", left: "55%" },
  { top: "35%", left: "35%" },
  { top: "50%", left: "10%" },
  { top: "25%", left: "5%" },
  { top: "60%", left: "57%" },
  { top: "45%", left: "68%" },
  { top: "78%", left: "10%" },
  { top: "23%", left: "65%" },
  { top: "65%", left: "25%" },
  { top: "78%", left: "65%" },
];

export default function LogoTransition({ id }) {
  return (
    <div id={id} className={`${utils.transitionsSubContain} ${styles[id]}`}>
      {imagePositions.map((position, idx) => (
        <img
          key={idx}
          src="/images/logo.png"
          alt="Logo"
          style={{
            position: "absolute",
            top: position.top,
            left: position.left,
            width: "10rem",
            height: "10rem",
          }}
        />
      ))}
    </div>
  );
}
