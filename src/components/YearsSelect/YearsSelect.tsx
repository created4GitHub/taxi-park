import { useIntl } from "react-intl";
import { Years } from "../../constants/years";

const YearsSelect = () => {
    const intl = useIntl();

    return (
        <>
            <option value="" hidden>{intl.formatMessage({ id: "Select" })}</option>
            {Years.map(item =>
                <option value={item} key={item}>{item}</option>
            )}
        </>
    )
}

export default YearsSelect;
