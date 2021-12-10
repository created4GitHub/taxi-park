import { useSelector } from "react-redux";
import { statusesSelector } from "../../constants/selectors/selector";

import { Status } from "../../interfaces/interfaces";
import { RootState } from "../../redux/rootReducer";

import './statuses.style.scss'

interface Props {
    value?: string;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Statuses = ({ value, onChange, id }: Props) => {

    const statuses = useSelector(statusesSelector);

    const mapItems = (item: Status) => {
        return (
            <option key={item.title} >
                {item.title}
            </option>
        )
    }
    
    const mappedItems = statuses.map(mapItems)

    return (
        <select
            name="status"
            className="table_section-tab-select"
            value={value}
            onChange={onChange}
            id={id}
        >
            {mappedItems}
        </select>
    )
}

export default Statuses;
