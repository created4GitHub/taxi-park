import { FocusEventHandler } from "react";

import DriverIDList from "../../driverListById/DriverListById";
import YearSelect from "../../yearSelect/YearSelect";
import Input from "../../regularComponents/input/Input";
import { CarInfo, DriverInfo } from "../../../constants/AddNewSection"

interface Props {
    title: string;
}

export default function AddNewSection({ title }: Props) {
    const isCar = title === "car";
    const info = (isCar && CarInfo) || DriverInfo;
    const optionalInfo: JSX.Element =
        (isCar && <> <YearSelect name="year" /> <DriverIDList name="driver_id" /></>)
        || <Input type="date" onFocus={isWarning} className='table_section-input-date' name="date_birth" />;

    function isWarning(event: React.FocusEvent<HTMLInputElement>) {
        event.target.classList.forEach((item: string) => {
            if (item === "warning") {
                event.target.classList.remove("warning");
            }
        });
    };

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
                            onFocus={isWarning}
                        />
                    </div >
                )
            })}
            {optionalInfo}
        </>
    )
}
