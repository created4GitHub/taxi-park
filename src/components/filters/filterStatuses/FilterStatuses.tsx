import { ChangeEvent, MutableRefObject } from "react";
import { useSelector } from "react-redux";

import Input from "../../regularComponents/input/Input";
import { RootState } from "../../../store/rootReducer";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    filterValues: MutableRefObject<{ [key: string]: string }>;
}

export default function FilterStatuses({ filter, filterValues }: Props) {
    const statuses = useSelector((state: RootState) => state.statucesReducer.statusReceived);

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
                            checked={(filterValues.current as { [key: string]: string }).status === title}
                        />
                        <label htmlFor={"status" + title}>{title}</label>
                    </div>
                );
            })}
        </div>
    )
}