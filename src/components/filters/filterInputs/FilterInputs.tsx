import { ChangeEvent, useMemo } from "react";
import { useIntl } from "react-intl";

import Input from "../../compose/input/Input";
import { CARINFO, DRIVERINFO } from "../../../constants/filterInputs"

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    title: string;
}

interface Info {
    name: string;
    placeholder: string;
};

const uuid = require("react-uuid");

const FilterInputs = ({ filter, title }: Props) => {
    const inputInfo = (title === "car" && CARINFO) || DRIVERINFO;
    const intl = useIntl();
    const mapItems = ({ name, placeholder }: Info) => {
        return (
            <Input onChange={filter}
                key={uuid()}
                name={name}
                placeholder={intl.formatMessage({ id: placeholder })}
            />
        )
    }

    const mappedItems = useMemo(() => inputInfo.map(mapItems), [inputInfo])

    return (
        <>
            <div className='filter_element-inputs'>
                {mappedItems}
            </div>
        </>
    );
}

export default FilterInputs;
