import React from 'react';
import {paramsType} from "../formDriver"

const FormDiv = (props: paramsType) => {
    return (
                <div className="table_div" id={props.id} onClick={props.onClick}>
                    <p className="table_paragraph">{props.first_name}</p>
                </div>
    )
}

export default FormDiv;
