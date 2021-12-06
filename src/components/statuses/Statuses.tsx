import { useSelector } from "react-redux";

import { Status } from "../../interfaces/interfaces";
import { RootState } from "../../store/rootReducer";

interface Props {
    defaultValue?: string;
    id?: string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Statuses({ defaultValue, onChange, id }: Props) {

    const statuses = useSelector((state: RootState) => state.statusReducer);

    return (
        <select
            name="status"
            className="table_section_add-select"
            defaultValue={defaultValue}
            onChange={onChange}
            id={id}
        >
            {statuses?.map((item: Status, index: number) => {
                return (
                    <option key={item.title} >
                        {item.title}
                    </option>
                )
            })}
        </select>
    )
}