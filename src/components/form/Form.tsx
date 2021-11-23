import React, { useContext } from "react";
import { Context } from "../../context";

import AddForm from '../addformComponent/addForm'
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
