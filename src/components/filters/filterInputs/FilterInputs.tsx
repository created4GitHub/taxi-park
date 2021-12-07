import { ChangeEvent, MutableRefObject } from "react";

import Input from "../../regularComponents/input/Input";
import { CarInfo, DriverInfo } from "../../../constants/FilterInputs"

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    filterValues: MutableRefObject<{ [key: string]: string }>;
}

export default function FilterInputs({ filter, title, filterValues }: Props) {
    const inputInfo = (title === "car" && CarInfo) || DriverInfo;

    return (
        <>
            <div className='filter_element-inputs'>
                {inputInfo.map(({ name, placeholder }) =>
                    <Input onChange={filter}
                        key={name}
                        name={name}
                        placeholder={placeholder}
                        value={(filterValues.current as { [key: string]: string })[name] || ""}
                    />
                )}
            </div>
        </>
    );
}