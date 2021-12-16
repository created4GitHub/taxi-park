import { ChangeEvent } from "react";
import { useIntl } from "react-intl";

import Input from "../../commons/input/Input";
import { CAR_INFO, DRIVE_INFO } from "../../../constants/filterInputs"
import { Filter } from "../../../interfaces/interfaces";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    filterValues: any;
}

interface Info {
    name: string;
    placeholder: string;
};

const FilterInputs = ({ filter, title, filterValues }: Props) => {
    const inputInfo = (title === "car" && CAR_INFO) || DRIVE_INFO;
    const intl = useIntl();
    const mapItems = ({ name, placeholder }: Info) => {
        return (
            <Input onChange={filter}
                key={name}
                name={name}
                placeholder={intl.formatMessage({ id: placeholder })}
                value={((filterValues as Filter[])[name as keyof Filter[]] as string) || ""}
            />
        )
    }

    const mappedItems = inputInfo.map(mapItems);

    return (
        <>
            <div className='filter_element-inputs'>
                {mappedItems}
            </div>
        </>
    );
}

export default FilterInputs;
