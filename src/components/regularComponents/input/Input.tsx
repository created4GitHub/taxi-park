import React, { ChangeEventHandler, FocusEventHandler } from "react";

type Props = {
  className?: string;
  maxLength?: number;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  id?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onInput?: ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<Props> = (props) => {
  return (
    <input
      id={props.id}
      maxLength={props.maxLength}
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onInput={props.onInput}
      onFocus={props.onFocus}
      checked={props.checked}
    />
  );
};

export default Input;
