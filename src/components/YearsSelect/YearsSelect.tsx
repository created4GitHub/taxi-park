import { useMemo } from "react";
import { useIntl } from "react-intl";
import { YEARS } from "../../constants/years";

const uuid = require("react-uuid");

const YearsSelect = () => {
    const intl = useIntl();
    const mapItems = (item: number) => {
        return <option value={item} key={uuid()}>{item}</option>
    }
    const mappedItems = useMemo(() => YEARS.map(mapItems), [YEARS]);

    return (
        <>
            <option value="" hidden>{intl.formatMessage({ id: "Select" })}</option>
            {mappedItems}
        </>
    )
}

export default YearsSelect;
