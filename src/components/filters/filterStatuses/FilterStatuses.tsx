import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

import Input from "../../regularComponents/input/Input";
import { RootState } from "../../../store/rootReducer";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    filterValues: any;
}

export default function FilterStatuses({ filter, filterValues }: Props) {
    const statuses = useSelector((state: RootState) => state.statuses);

    return (
        <div className='filter_element-inputRadio'>
            {statuses?.map(({ title }: { title: string }) => {
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
                );
            })}
        </div>
    )
}