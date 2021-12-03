import DriverIDList from "../../driverIDList/FindDriverId";
import YearSelect from "../../yearSelect/YearSelect";
import Input from "../../regularComponents/input/Input";
import { FocusEventHandler } from "react";

export default function AddNewSection({ title }: { title: string }) {

    interface Information {
        name: string;
        placeholder: string;
        length: number;
    };

    let info: Information[];
    let optionalInfo: JSX.Element;

    if (title === "car") {
        info = [
            { name: "model", placeholder: "Model", length: 15 },
            { name: "mark", placeholder: "Mark", length: 10 },
            { name: "number", placeholder: "Number", length: 8 },
        ]
        optionalInfo = (<>
            <YearSelect name="year" />
            <DriverIDList name="driver_id" />
        </>
        );
    }
    else {
        info = [
            { name: "first_name", placeholder: "Name", length: 15 },
            { name: "last_name", placeholder: "Surname", length: 15 },
        ];
        optionalInfo = <Input type="date" name="date_birth" />
    };

    const isWarning: FocusEventHandler<HTMLInputElement> = (event) => {
        event.target.classList.forEach((item: string) => {
            if (item === "warning") {
                event.target.classList.remove("warning");
            }
        });
    };

    return (
        <>
            {info.map((item: Information, index: number) =>
                <div key={index} className="table_section-block-input">
                    < Input
                        className="table_section-input"
                        placeholder={item.name}
                        name={item.name}
                        maxLength={item.length}
                        onFocus={isWarning}
                    />
                </div >
            )
            }
            {optionalInfo}
        </>
    )
}
