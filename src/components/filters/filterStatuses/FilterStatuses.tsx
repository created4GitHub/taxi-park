import { ChangeEvent, useMemo } from "react";
import { useSelector } from "react-redux";

import Input from "../../compose/input/Input";
import { statusesSelector } from "../../../redux/selectors/selector";
import { useIntl } from "react-intl";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
}

const uuid = require("react-uuid");

const FilterStatuses = ({ filter }: Props) => {
    const statuses = useSelector(statusesSelector);
    const intl = useIntl();

    const mapItems = ({ title }: { title: string }) => {
        return (
            <div className="filter-element" key={uuid()}>
                <Input
                    type="radio"
                    name="status"
                    id={"status" + title}
                    onChange={filter}
                    value={title}
                />
                <label htmlFor={"status" + title}>{intl.formatMessage({ id: title })}</label>
            </div>
        )
    }

    const mappedItems = useMemo(() => statuses.map(mapItems), [statuses])

    return (
        <div className='filter_element-inputRadio'>
            {mappedItems}
        </div>
    )
}

export default FilterStatuses;
