import { ChangeEvent } from "react";
import { useIntl } from "react-intl";

import Input from "../../commons/Input";
import { CAR_INFO, DRIVE_INFO } from "../../../constants/filterInputs"
import { Filter } from "../../../interfaces";
import { useSelector } from "react-redux";
import { isPageCarSelector } from "../../../redux/selectors";

interface Info {
    name: string;
    placeholder: string;
};

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    pageName: string;
    filterValues: any;
}

const FilterInputs = ({ filter, pageName, filterValues }: Props) => {
    const isPageCar = useSelector(isPageCarSelector);
    const inputInfo = (isPageCar && CAR_INFO) || DRIVE_INFO;
    const intl = useIntl();
    const mapItems = ({ name, placeholder }: Info) => {
        const inputValue = ((filterValues as Filter[])[name as keyof Filter[]] as string);
        return (
            <Input onChange={filter}
                key={name}
                name={name}
                placeholder={intl.formatMessage({ id: placeholder })}
                value={inputValue || ""}
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