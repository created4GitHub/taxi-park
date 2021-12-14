import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

import Input from "../../regularComponents/input/Input";
import { statusesSelector } from "../../../redux/selectors/selector";
import { RootState } from "../../../redux/rootReducer";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    filterValues: any;
}

const FilterStatuses = ({ filter, filterValues }: Props) => {
    const statuses = useSelector(statusesSelector);

    const mapItems = ({ title }: { title: string }) => {
        return (
            <div className="filter-element" key={title}>
                <Input
                    type="radio"
                    name="status"
                    id={"status" + title}
                    onChange={filter}
                    value={title}
                    checked={filterValues.status === title}
                />
                <label htmlFor={"status" + title}>{title}</label>
            </div>
        )
    }

    const mappedItems = statuses.map(mapItems)

    return (
        <div className='filter_element-inputRadio'>
            {mappedItems}
        </div>
    )
}

export default FilterStatuses;
