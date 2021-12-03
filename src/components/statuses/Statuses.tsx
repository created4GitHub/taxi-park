import { useSelector } from "react-redux";

import { Status } from "../../interfaces";
import { RootState } from "../../store/reducers/rootReducer";

export default function Statuses() {

    const statuses = useSelector((state: RootState) => state.statusReducer);

    return (
        <select
            name="status"
            className="table_section_add-select"
        >
            {statuses &&
                statuses.map((item: Status, index: number) =>
                    <option key={index} >
                        {item.title}
                    </option>
                )}
        </select>
    )
}