import React, { ChangeEventHandler } from "react";

import './year.style.scss'

type Props = {
    id?: string;
    maxLength?: number;
    name?: string;
    defaultValue?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
};

const YearSelect: React.FC<Props> = (props: Props) => {
    let massYears: number[] = [];

    for (let index: number = 2021; index >= 1960; index--) {
        massYears.push(index);
    }

    return (
        <select 
            id={props.id}
            onChange={props.onChange}
            name={props.name}
            defaultValue={props.defaultValue}
        >
        {massYears.map((item: number, index: number) => {
            return (
                <option
                    id={item + ''}
                    key={index}
                >{item}
                </option>
                )
            })}
        </select>
    )
}

export default YearSelect;
