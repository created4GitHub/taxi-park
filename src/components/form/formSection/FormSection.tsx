import React from 'react';

import {paramsType} from "../formDriver"

const FormSection = (props: paramsType) => {
    return ( <div
        className="table_div"
        id={props.first_name}
        onClick={props.onClick}>
        <input
            name="code"
            type="text"
            placeholder={props.first_name}
            className="table_input"
            autoFocus={true}
        // value={inputParam}
        // onChange={handleChenge}
        />
        </div>
        )
}

export default FormSection;