import { useMemo } from "react";
import { useIntl } from "react-intl";
import { Years } from "../../constants/years";

const uuid = require("react-uuid");

const YearsSelect = () => {
    const intl = useIntl();

    const memoizedYears = useMemo(() => Years.map(item =>
        <option value={item} key={uuid()}>{item}</option>
    ), [])

    return (
        <>
            <option value="" hidden>{intl.formatMessage({ id: "Select" })}</option>
            {memoizedYears}
        </>
    )
}

export default YearsSelect;
