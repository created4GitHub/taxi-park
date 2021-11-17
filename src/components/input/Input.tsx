import React, {} from "react";

export const Input = (props) => {
  return (
    <input
      className={props.className}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}