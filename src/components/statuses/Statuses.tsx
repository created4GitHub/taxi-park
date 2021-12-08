import { useSelector } from "react-redux";

import { Status } from "../../interfaces/interfaces";
import { RootState } from "../../store/rootReducer";

interface Props {
    value?: string;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Statuses({ value, onChange, id }: Props) {

    const statuses = useSelector((state: RootState) => state.statucesReducer.statusReceived);

    return (
        <select
            name="status"
            className="table_section-tab-select"
            value={value}
            onChange={onChange}
            id={id}
        >
            {statuses?.map((item: Status) => {
                return (
                    <option key={item.title} >
                        {item.title}
                    </option>
                )
            })}
        </select>
    )
}