import icons from "../../../../img/IconsDirection.svg";
import { Data } from "../../../../interfaces/interfaces";

const AdditionalData = ({ additionalData, title }: { additionalData: Data[], title: string }) => {
    const carTitles = ['ID', 'Name', 'Surname', 'Birthday', 'Registration', 'Status'];
    const driverTitles = ['ID', 'Driver ID', 'Model', 'Mark', 'Number', 'Year', 'Class'];

    const renderTitles = (array: string[]) => {
        return array.map((item: any, index: number) => {
            return <p key={index}> {item} <img src={icons} alt="alt" /></p>
        });
    }

    return (
        <div className="table_section_isActive">
            <div className="block">
                {title === 'car' ? renderTitles(carTitles) : renderTitles(driverTitles)}
            </div>
            {additionalData?.map((item: any) => {
                return (
                    <div className="block">
                        {Object.values(item).map((item: any, index: number) => {
                            if (item.hasOwnProperty("title")) {
                                return <p key={index}>{item.title}</p>;
                            }
                            return <p key={index}>{item}</p>;
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default AdditionalData;
