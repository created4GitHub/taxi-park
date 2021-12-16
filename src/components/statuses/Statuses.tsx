import { useMemo } from "react";
import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { statusesSelector } from "../../redux/selectors/selector";

import { Status } from "../../interfaces/interfaces";

import './statuses.style.scss'

const uuid = require("react-uuid");

const Statuses = () => {
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
        <select className="table_section-tab-select">
            <option value="" hidden>{intl.formatMessage({ id: "Status" })}</option>
            {mappedItems}
        </select>
    )
}

export default Statuses;
