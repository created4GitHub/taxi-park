import { ChangeEvent, MutableRefObject } from "react";

import Input from "../../regularComponents/input/Input";

interface Props {
    filter: (event: ChangeEvent<HTMLInputElement>) => void;
    title: string;
    filterValues: MutableRefObject<{ [key: string]: string }>;
}

interface Info {
    name: string;
    placeholder: string;
};

export default function FilterInputs({ filter, title, filterValues }: Props) {

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
                {inputInfo.map(({ name, placeholder }: Info) =>
                    <Input onChange={filter}
                        key={name}
                        name={name}
                        placeholder={placeholder}
                        value={(filterValues.current as { [key: string]: string })[name] || ""}
                    />
                )}
            </div>
        </>
    );
}