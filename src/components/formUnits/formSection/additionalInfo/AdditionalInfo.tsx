import { FormattedMessage } from "react-intl";

import { Data, Status } from "../../../../interfaces/interfaces";
import { DriverTitles, CarTitles } from "../../../../constants/additionalInfo";

import icons from "../../../../img/IconsDirection.svg";

const AdditionalData = ({ additionalData, title }: { additionalData: Data[], title: string }) => {
    const renderTitles = (array: string[]) => {
        return array.map((item: string) => {
            return <p key={item}><FormattedMessage id={item} /><img src={icons} alt="alt" /></p>
        });
    }

    const mapItems = (item: Data) => {
        return (
            <div className="block" key={item.id}>
                {Object.values(item).map((item: Status | string | number, index: number) => {
                    if (item.hasOwnProperty("title")) {
                        return <p key={(item as Status).title}>{(item as Status).title}</p>;
                    }
                    return <p key={String((item as string | number)) + index}>{item}</p>
                })}
            </div>
        )
    }

    const mappedItems = additionalData.map(mapItems);

    return (
        <div className="table_section_isActive">
            <div className="block">
                {title === 'car' ? renderTitles(DriverTitles) : renderTitles(CarTitles)}
            </div>
            {mappedItems}
        </div>
    )
}

export default AdditionalData;
