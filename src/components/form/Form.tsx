import React, { useEffect, useState, useRef, useContext } from "react";

import FormSection from "../formSection/FormSection";
import "./form.scss";

type infoType = {
  id: number;
  first_name: string;
  last_name: string;
  date_birth: number;
  date_created: number;
  status: {
    title: string;
    code: string;
  };
};

const Form = (props:any) => {
  console.log(props)
  return (
<div className="table">
          {props.info.map((item : any, index : any) => {
            return (
              <FormSection key={index} {...{ info: item, statuses: props.statuses }} />
            );
          })}
        </div>
      ) 
        }

export default Form;
