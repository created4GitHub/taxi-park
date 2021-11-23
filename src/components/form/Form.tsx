<<<<<<< HEAD
import React, { useEffect, useState, useRef, useContext } from "react";
=======
import React, { useContext } from "react";
>>>>>>> parent of 4a015cc (merge)
import { Context } from "../../context";

import AddForm from '../addDrivers/addForm'
import FormSection from "../formSection/FormSection";

import "./form.scss";

<<<<<<< HEAD
const Form = (props: any) => {
=======
const Form = (props:any) => {
>>>>>>> parent of 4a015cc (merge)
  const [context, setContext] = useContext(Context);

  console.log(props);

  return (
    <div className="table">
      { context ? <AddForm /> : '' }
      { props === undefined ? props.info.map((item : any, index : any) => {
        return (
          <FormSection key={ index } {...{ info: item, statuses: props.statuses }} />
        );
      }) : '' }
    </div>
  ) 
}

export default Form;
