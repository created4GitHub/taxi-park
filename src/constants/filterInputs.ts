interface Info {
    name: string;
    placeholder: string;
};

export const CAR_INFO: Info[] = [
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
];

export const DRIVE_INFO: Info[] = [
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
