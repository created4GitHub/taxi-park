import { ChangeEvent } from "react";

import Input from "../../regularComponents/input/Input";
import { CarInfo, DriverInfo } from "../../../constants/filterInputs"
import { Filter } from "../../../interfaces/interfaces";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    filterValues: Filter | Filter[];
}

const FilterInputs = ({ filter, title, filterValues }: Props) => {
    const inputInfo = (title === "car" && CarInfo) || DriverInfo;

    return (
        <>
            <div className='filter_element-inputs'>
                {inputInfo.map(({ name, placeholder }) =>
                    <Input onChange={filter}
                        key={name}
                        name={name}
                        placeholder={placeholder}
                        value={((filterValues as Filter[])[name as keyof Filter[]] as string) || ""}
                    />
                )}
            </div>
        </>
    );
}

export default FilterInputs;
