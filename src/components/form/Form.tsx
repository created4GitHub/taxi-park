import React, { useEffect, useState, useRef, useContext } from "react";
import { Context } from "../../context";

import AddForm from '../addDrivers/addForm'
import FormSection from "../formSection/FormSection";

import "./form.scss";

const Form = (props: any) => {
  const [context, setContext] = useContext(Context);

  return (
        <div className="table">
          {context ? <AddForm /> : ''}
            {props.info.map((item : any, index : any) => {
              return (
                <FormSection key={index} {...{ info: item, statuses: props.statuses }} />
              );
            })}
        </div>
      ) 
        }

export default Form;
