import { FormattedMessage } from "react-intl";

import { Data, Status } from "../../../../interfaces/interfaces";
import { DRIVER_TITLES, CAR_TITLES } from "../../../../constants/additionalInfo";

import icons from "../../../../ascets/img/svg/IconsDirection.svg";
import { useMemo } from "react";

const uuid = require("react-uuid");

const AdditionalData = ({ additionalData, title }: { additionalData: Data[], title: string }) => {

    const renderTitles = (array: string[]) => {
        return array.map((item: string) => {
            return <p key={uuid()}><FormattedMessage id={item} /><img src={icons} alt="alt" /></p>
        });
    }


    const mapItems = (item: Data) => {
        return (
            <div className="block" key={item.id}>
                {Object.values(item).map((item: Status | string | number) => {
                    if (item.hasOwnProperty("title")) {
                        return <p key={uuid()}>{(item as Status).title}</p>;
                    }
                    return <p key={uuid()}>{item}</p>
                })}
            </div>
        )
    }
    
    const mappedItems = useMemo(() => additionalData.map(mapItems), [additionalData]);

    return (
        <div className="table_section_isActive">
            <div className="block">
                // TODO refactor
                {title === 'car' ? renderTitles(DRIVER_TITLES) : renderTitles(CAR_TITLES)}
            </div>
            {mappedItems}
        </div>
    )
}

export default AdditionalData;
