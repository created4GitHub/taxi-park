import { useMemo } from "react";
import { useIntl } from "react-intl";
import { YEARS } from "../../constants/years";

const uuid = require("react-uuid");

const YearsSelect = () => {
    const intl = useIntl();
    const mapItems = (item: number) => {
        return (
            <option value={item} key={uuid()}>
                {item}
            </option>
        )
    }

    const mappedItems = useMemo(() => YEARS.map(mapItems), [YEARS]);

    return (
        <select className="table_section-tab-select">
            <option value="" hidden>
                {intl.formatMessage({ id: "Year" })}
            </option>
            {mappedItems}
        </select>
    )
}

export default YearsSelect;
