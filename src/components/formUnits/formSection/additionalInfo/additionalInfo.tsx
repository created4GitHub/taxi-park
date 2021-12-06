import icons from "../../../../img/IconsDirection.svg";
import { Data, Status } from "../../../../interfaces/interfaces";

const AdditionalData = ({ additionalData, title }: { additionalData: Data[], title: string }) => {
    const carTitles = ['ID', 'Name', 'Surname', 'Birthday', 'Registration', 'Status'];
    const driverTitles = ['ID', 'Driver ID', 'Model', 'Mark', 'Number', 'Year', 'Class'];

    const renderTitles = (array: string[]) => {
        return array.map((item: string) => {
            return <p key={item}> {item} <img src={icons} alt="alt" /></p>
        });
    }

    return (
        <div className="table_section_isActive">
            <div className="block">
                {title === 'car' ? renderTitles(carTitles) : renderTitles(driverTitles)}
            </div>
            <div className="block">
                {additionalData?.map((item: Data) => {
                    <div className="block">
                        {Object.values(item).map((item: Status | string | number) => {
                            if (item.hasOwnProperty("title")) {
                                return <p key={(item as Status).title}>{(item as Status).title}</p>;
                            }
                            return <p key={(item as string | number)}>{item}</p>
                        })
                        })
                    </div>
                })}
            </div>
        </div>
    )
}

export default AdditionalData;
