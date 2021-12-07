import DriverIDList from "../components/driverListById/DriverListById";
import Input from "../components/regularComponents/input/Input";
import YearSelect from "../components/yearSelect/YearSelect";

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

export const CarOptionalInfo: JSX.Element =
    <>
        <YearSelect name="year" />
        <DriverIDList name="driver_id" />
    </>;

export const DriverOptionalInfo = (onFocus: (event: React.FocusEvent<HTMLInputElement>) => void) => {
    return <Input
        type="date"
        onFocus={onFocus}
        className='table_section-input-date'
        name="date_birth"
    />
}