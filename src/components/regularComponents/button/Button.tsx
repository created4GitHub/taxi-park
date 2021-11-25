import React, { MouseEventHandler } from "react";

import "./button.style.scss";

type Props = {
  className: string;
  disabled: boolean | undefined;
  btnText: string;
  onBlur: any;
  name: any;
  id: any;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
};

export const Button: React.FC<Props> | any = (props: any) => {
  return (
    <button
      id={props.id}
      name={props.name}
      onBlur={props.onBlur}
      onClick={props.onClick}
      className={props.className}
      disabled={props.disabled}
    >
      {props.btnText}
    </button>
  );
};
