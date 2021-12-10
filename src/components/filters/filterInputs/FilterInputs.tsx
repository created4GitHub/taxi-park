import { ChangeEvent } from "react";

import Input from "../../regularComponents/input/Input";
import { CarInfo, DriverInfo } from "../../../constants/FilterInputs"
import { Filter } from "../../../interfaces/interfaces";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    filterValues: Filter | Filter[];
}

interface Info {
    name: string;
    placeholder: string;
};

const FilterInputs = ({ filter, title, filterValues }: Props) => {
    const inputInfo = (title === "car" && CarInfo) || DriverInfo;

    const mapItems = ({ name, placeholder }: Info) => {
        return (
            <Input onChange={filter}
                key={name}
                name={name}
                placeholder={placeholder}
                value={((filterValues as Filter[])[name as keyof Filter[]] as string) || ""}
            />
        )
    }

    const mappedItems = inputInfo.map(mapItems)

    return (
        <>
            <div className='filter_element-inputs'>
                {mappedItems}
            </div>
        </>
    );
}

export default FilterInputs;
