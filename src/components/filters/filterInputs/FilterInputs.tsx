import { ChangeEvent, useMemo } from "react";
import { useIntl } from "react-intl";

import Input from "../../commons/input/Input";
import { CarInfo, DriverInfo } from "../../../constants/filterInputs"
import { Filter } from "../../../interfaces/interfaces";

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
    const inputInfo = (title === "car" && CarInfo) || DriverInfo;
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

    const mappedItems = useMemo(() => inputInfo.map(mapItems), []);

    return (
        <>
            <div className='filter_element-inputs'>
                {mappedItems}
            </div>
        </>
    );
}

export default FilterInputs;
