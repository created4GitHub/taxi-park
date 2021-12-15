import { useIntl } from "react-intl";
import { useSelector } from "react-redux";
import { statusesSelector } from "../../redux/selectors/selector";

import { Status } from "../../interfaces/interfaces";
import { RootState } from "../../redux/rootReducer";

import './statuses.style.scss'

const Statuses = () => {
    const intl = useIntl();
    const statuses = useSelector(statusesSelector);

    const mapItems = (item: Status) => {
        return (
            <option key={item.title}>
                {item.title}
            </option>
        )
    }

    const mappedItems = statuses.map(mapItems)

    return (
        <>
            <option value="" hidden>{intl.formatMessage({ id: "Select" })}</option>
            {mappedItems}
        </>
    )
}

export default Statuses;
