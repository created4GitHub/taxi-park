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

import AddForm from '../addformComponent/addForm'
import FormSection from "../formSection/FormSection";

import "./form.scss";

const Form = (props: any) => {
  const statuses = useRef([]);
  const info = useRef([]);
  const [isReceived, setIsReceived] = useState(false);
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
