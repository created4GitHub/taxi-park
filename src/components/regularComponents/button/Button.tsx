import React, { MouseEventHandler, FocusEventHandler } from "react";

type Props = {
  className?: string;
  disabled?: boolean;
  btnText?: string;
  name?: string;
  id?: string;
  type?: string
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
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
      type={props.type || "button"}
    >
      {props.btnText}
    </button>
  );
};
