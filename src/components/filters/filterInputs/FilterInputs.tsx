import { ChangeEvent } from "react";

import Input from "../../regularComponents/input/Input";
import { CarInfo, DriverInfo } from "../../../constants/filterInputs"
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
    const inputInfo = (title === "car" && CarInfo) || DriverInfo;
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
