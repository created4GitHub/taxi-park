// import React, { useContext } from "react";
// import { Context } from "../../context";

// import AddForm from '../addformComponent/addForm'
// import FormSection from "../formSection/FormSection";

// import "./form.scss";

// const Form = (props:any) => {
//   const [context, setContext] = useContext(Context);

//   console.log(props);

//   return (
//     <div className="table">
//       { context ? <AddForm /> : '' }
//       { props === undefined ? props.info.map((item : any, index : any) => {
//         return (
//           <FormSection key={ index } {...{ info: item, statuses: props.statuses }} />
//         );
//       }) : '' }
//     </div>
//   ) 
// }

// export default Form;

import React, { useEffect, useState, useRef, useContext } from "react";
import { Context } from "../../context";

import AddForm from '../addDrivers/addForm'
import FormSection from "../formSection/FormSection";

import "./form.scss";

<<<<<<< HEAD
const Form = (props: any) => {
  const statuses = useRef([]);
  const info = useRef([]);
  const [isReceived, setIsReceived] = useState(false);
=======
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

const Form = (props: any) => {
>>>>>>> origin/git-status
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
