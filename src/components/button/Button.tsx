import React from "react";

import './Button.style.css';

export const Button : React.FC = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.btnText}
    </button>
  )
}