import React, {
    useState,
    useEffect,
    Dispatch,
    SetStateAction,
    useRef,
    MutableRefObject,
    MouseEventHandler,
    ChangeEventHandler,
} from "react";
import { Input } from "../input";

import { infoType } from "./testMass";
import massObj from "./testMass";

import "./formDriver.min.scss";

import FormDiv from "./formDiv/FormDiv";
import FormInput from "./formSection/FormSection"

export interface paramsType extends infoType {
    name?: string;
    placeholder?: string;
    className?: string;
    value?: string;
}

const FormDrivers = () => {

    function handleClick(event: any) {
        console.log(event.target)
        setElement(!element);
    }
    const [element, setElement] = useState(true);

    

    return (
        <div className="table">
            {massObj.map((item, index) => {
                item.onClick = handleClick;
                return (
                    <div className="table_div">
                        <div className="table_paragraph">{item.id}</div>
                        {element ?  <FormDiv {...item}/> : <FormInput {...item}/>}
                    </div>
                );
            })}
        </div>
    );
};

export default FormDrivers;
