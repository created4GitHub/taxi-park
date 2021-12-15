import { ChangeEvent, useMemo } from "react";

import Input from "../../compose/input/Input";
import { CARINFO, DRIVERINFO } from "../../../constants/filterInputs"
import { Filter } from "../../../interfaces/interfaces";
import { FormattedMessage, injectIntl, useIntl } from "react-intl";
import { messages } from "../../../i18n/messages";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    filterValues?: Filter | Filter[];
}

interface Info {
    name: string;
    placeholder: string;
};

const FilterInputs = ({ filter, title, filterValues }: Props) => {
    const inputInfo = (title === "car" && CARINFO) || DRIVERINFO;
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
