import { useMemo } from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";

import { statusesSelector } from "../../redux/selectors";
import { Status } from "../../interfaces";

import './statuses.style.scss'

const uuid = require("react-uuid");

interface Props {
    name?: string;
    className?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    id?: string;
}

const Statuses = (props?: Props) => {
    const intl = useIntl();
    const statuses = useSelector(statusesSelector);

    const mapItems = (item: Status) => {
        return (
            <option key={uuid()}>
                {item.title}
            </option>
        )
    }

    const mappedItems = useMemo(() => statuses.map(mapItems), [statuses])

    return (
        <select {...props}>
            <option value="" hidden>{intl.formatMessage({ id: "Status" })}</option>
            {mappedItems}
        </select>
    )
}

export default Statuses;
