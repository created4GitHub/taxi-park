import { Data, Status } from "../../../../../interfaces/interfaces";
import { DriverTitles, CarTitles } from "../../../../../constants/additionalInfo";

import icons from "../../../../../img/IconsDirection.svg";

const AdditionalData = ({ additionalData, title }: { additionalData: Data[], title: string }) => {
    const renderTitles = (array: string[]) => {
        return array.map((item: string) => {
            return <p key={item}> {item} <img src={icons} alt="alt" /></p>
        });
    }

    return (
        <div className="table_section_isActive">
            <div className="block">
                {title === 'car' ? renderTitles(DriverTitles) : renderTitles(CarTitles)}
            </div>
            {additionalData?.map((item: Data) => {
                return (
                    <div className="block" key={item.id}>
                        {Object.values(item).map((item: Status | string | number) => {
                            if (item.hasOwnProperty("title")) {
                                return <p key={(item as Status).title}>{(item as Status).title}</p>;
                            }
                            return <p key={(item as string | number)}>{item}</p>
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default AdditionalData;
