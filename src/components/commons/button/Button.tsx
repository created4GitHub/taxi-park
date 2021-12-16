import React, {
  MouseEventHandler,
  FocusEventHandler,
  ReactElement,
  JSXElementConstructor
} from "react";

type Props = {
  id?: string;
  name?: string;
  type?: "button" | "reset" | "submit";
  className?: string;
  btnText?: string | ReactElement<HTMLElement, string | JSXElementConstructor<string>>;
  disabled?: boolean;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Props> = (props) => {
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
