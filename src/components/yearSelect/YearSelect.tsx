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

    const mapItems = (item: number) => {
        return (
            <option key={item} >
                {item}
            </option>
        )
    }

    const mappedItems = massYears?.map(mapItems)

    return (
        <select
            onChange={onChange}
            name={name}
            defaultValue={defaultValue}
        >
            {mappedItems}
        </select>
    )
}

export default YearSelect;
