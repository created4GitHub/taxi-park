import React, { ChangeEventHandler } from "react";

type Props = {
  className?: string,
  maxLength?: any,
  name?: string,
  type?: string,
  placeholder?: string,
  value?: string,
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined
};

const Input : React.FC<Props> = (props) => {
  return (
    <input
      maxLength={props.maxLength}
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default Input;
