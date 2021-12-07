interface Info {
    name: string;
    placeholder: string;
    length: number;
};

export const CarInfo: Info[] = [
    {
        name: "model",
        placeholder: "Model",
        length: 15
    },
    {
        name: "mark",
        placeholder: "Mark",
        length: 10
    },
    {
        name: "number",
        placeholder: "Number",
        length: 8
    }
];

export const DriverInfo: Info[] = [
    {
        name: "first_name",
        placeholder: "Name",
        length: 15
    },
    {
        name: "last_name",
        placeholder: "Surname",
        length: 15
    },
];