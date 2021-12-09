import { useSelector } from "react-redux";

import { Status } from "../../interfaces/interfaces";
import { RootState } from "../../store/rootReducer";

import './statuses.style.scss'

interface Props {
    value?: string;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Statuses = ({ value, onChange, id }: Props) => {

    const statuses = useSelector((state: RootState) => state.statuses);

    return (
        <select
            name="status"
            className="table_section-tab-select"
            value={value}
            onChange={onChange}
            id={id}
        >
            {statuses.map((item: Status) => {
                return (
                    <option key={item.title} >
                        {item.title}
                    </option>
                )
            })}
        </select>
    )
}

export default Statuses;
