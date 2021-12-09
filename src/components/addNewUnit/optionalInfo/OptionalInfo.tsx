import Input from "../../regularComponents/input/Input";
import YearSelect from "../../yearSelect/YearSelect";
import DriverIDList from "../../driverListById/DriverListById";

interface Props {
    title: string;
}

const OptionalInfo = ({ title }: Props) => {
    const optionalInfo: JSX.Element = (title === "car" &&
        <>
            <YearSelect name="year" />
            <DriverIDList name="driver_id" />
        </>
    ) || (
            <Input
                type="date"
                className='table_section-input-date'
                name="date_birth"
            />
        );

    return (
        <>
            {optionalInfo}
        </>
    )
}

export default OptionalInfo;
