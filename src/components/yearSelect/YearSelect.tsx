import React, { ChangeEventHandler } from "react";

import './year.style.scss'

type Props = {
    maxLength?: number;
    name?: string;
    defaultValue?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
};

const YearSelect: React.FC<Props> = (props) => {

    let massYears = [];

    for (let i: number = 2021; i >= 1960; i--) {
        massYears.push(i)
    }

    return (
            <select 
            onChange={props.onChange}
            name={props.name}
            defaultValue={props.defaultValue}
            >
                {massYears.map((item: any, index: number) => {
                    return (
                        <option
                            id={item}
                            key={index}
                        >{item}
                        </option>
                    )
                })}
            </select>
    )
}

export default YearSelect;
