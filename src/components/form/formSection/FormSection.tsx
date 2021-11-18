import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context";

const FormSection = (props: any) => {
  let test = useContext(Context) as any;

  //   console.log((test! as any).first_name);

  let [isInput, setIsInput] = useState(true);
  let [isUpdated, setUpdate] = useState(false);

  function changeElement() {
    setIsInput(!isInput);
  }
  console.log("render");
  let check = (event: any) => {
    test.first_name = event.target.value;
    setUpdate(!isUpdated);
    setIsInput(!isInput);
  };

  return (
    <div
      className="table_div"
      id={test.id}
      onClick={changeElement}
      onBlur={check}
    >
      {isInput ? (
        <p className="table_paragraph">{test.first_name}</p>
      ) : (
        <input
          name="code"
          type="text"
          placeholder={test.first_name}
          className="table_input"
          autoFocus={true}
        />
      )}
    </div>
    //     // value={inputParam}
    //     // onChange={handleChenge}
  );
};

export default FormSection;
