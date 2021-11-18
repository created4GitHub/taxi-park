import React from 'react';
import massObj from "../testMass";

import { infoType } from "../testMass";

export interface paramsType extends infoType {
    name?: string;
    placeholder?: string;
    className?: string;
    value?: string;
}

const FormItem = (props : paramsType) => {

//     function createDiv(props){
//         return (
//             <div className="table_div" id={props.id} onClick={props.onClick}>
//                 <p className="table_paragraph">{props.first_name}</p>
//             </div>
// )
//     }

//     function createInput(props){
//         return ( <div
//             className="table_div"
//             id={props.first_name}
//             onClick={props.onClick}>
//             <input
//                 name="code"
//                 type="text"
//                 placeholder={props.first_name}
//                 className="table_input"
//                 autoFocus={true}
//             // value={inputParam}
//             // onChange={handleChenge}
//             />
//             </div>
//             )
//     }
//     return (
//         <div>
//             {massObj.map((item, index) => {
//                 return (
//                 <div className="table_div" id={item.id} onClick={item.onClick}>
//                     <p className="table_paragraph">{item.first_name}</p>
//                 </div>)
//             })}
//         </div>
//     )
    return (
        <div className="table_div">
            < FormSection />
        </div>
    )
}

export default FormItem;