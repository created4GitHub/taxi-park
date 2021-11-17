import React, {MouseEventHandler} from "react";

import './Button.style.css';

type Props = {
  className: string,
  disabled : boolean | undefined,
  btnText: string
  onClick: void | MouseEventHandler<HTMLButtonElement> | undefined,
};

export const Button : React.FC<Props> = (props) => {
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
