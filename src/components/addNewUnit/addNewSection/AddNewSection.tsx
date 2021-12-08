import Input from "../../regularComponents/input/Input";
import { CarInfo, DriverInfo } from "../../../constants/AddNewSection"
import YearSelect from "../../yearSelect/YearSelect";
import DriverIDList from "../../driverListById/DriverListById";

interface Props {
    title: string;
}

const AddNewSection = ({ title }: Props) => {
    const isCar = title === "car";
    const info = (isCar && CarInfo) || DriverInfo;

    const optionalInfo: JSX.Element = (isCar &&
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
            {info?.map(item => {
                return (
                    <div key={item.name} className="table_section-block-input">
                        < Input
                            className="table_section-input"
                            placeholder={item.placeholder}
                            name={item.name}
                            maxLength={item.length}
                        />
                    </div >
                )
            })}
            {optionalInfo}
        </>
    )
}

export default AddNewSection;
