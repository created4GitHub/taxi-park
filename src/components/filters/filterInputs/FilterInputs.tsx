import { ChangeEvent } from "react";
import { useSelector } from "react-redux";

import Input from "../../regularComponents/input/Input";
import { RootState } from "../../../store/rootReducer";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    title: string;
}

interface Info {
    name: string;
    placeholder: string;
};

export default function FilterInputs({ filter, title }: Props) {
    const statuses = useSelector((state: RootState) => state.statusReducer);
    const inputInfo: Info[] = (title === "car"
        && [
            {
                name: "id",
                placeholder: "Search by ID"
            },
            {
                name: "driver_id",
                placeholder: "Search by driver ID"
            },
            {
                name: "mark",
                placeholder: "Search by mark"
            },
            {
                name: "model",
                placeholder: "Search by model"
            },
            {
                name: "number",
                placeholder: "Search by number"
            },
        ])
        || [
            {
                name: "id",
                placeholder: "Search by ID"
            },
            {
                name: "first_name",
                placeholder: "Search by name"
            },
            {
                name: "last_name",
                placeholder: "Search by surname"
            }
        ];

    return (
        <>
            <div className='filter_element-inputs'>
                {inputInfo.map((item: Info) =>
                    <Input onChange={filter}
                        name="id"
                        placeholder="Search by ID"
                    // value={(filtersValues.current as { [key: string]: string }).id} 
                    />
                )}
            </div>
        </>
    );
}