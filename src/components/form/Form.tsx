import React from "react";

import FormItem from "./formItem/FormItem"

import { infoType } from "./testMass";
import massObj from "./testMass";

import "./formDriver.min.scss";

const Form = () => {

    // function handleClick(event: any) {
    //     console.log(event.target)
    //     setElement(!element);
    // }
    // const [element, setElement] = useState(true);


    return (
        <div className="table">
{            massObj.map((item, index) => {
                < FormItem {...item}/>
            })}
        </div>
    );
};

export default Form;
