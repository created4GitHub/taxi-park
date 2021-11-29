import React, { MouseEventHandler, FocusEventHandler } from "react";

type Props = {
  className: string;
  disabled: boolean | undefined;
  btnText: string;
  onBlur: FocusEventHandler<HTMLButtonElement>;
  name: string;
  id: string;
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
