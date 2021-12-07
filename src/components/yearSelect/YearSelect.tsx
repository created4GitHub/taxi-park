import React, { ChangeEventHandler } from "react";

import './year.style.scss';

type Props = {
    name?: string;
    defaultValue?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>;
};

const YearSelect: React.FC<Props> = ({ name, defaultValue, onChange }: Props) => {
    const massYears: number[] = [];
    for (let index: number = 2021; index >= 1960; index--) {
        massYears.push(index);
    }

    return (
        <select
            onChange={onChange}
            name={name}
            defaultValue={defaultValue}
        >
            {massYears?.map((item: number) => {
                return (
                    <option key={item} >
                        {item}
                    </option>
                )
            })}
        </select>
    )
}

export default YearSelect;
