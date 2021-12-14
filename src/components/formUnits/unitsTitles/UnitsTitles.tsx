import { FormattedMessage } from "react-intl";
import { CarInfo, DriverInfo } from "../../../constants/unitsTitles"

import IconsDirection from '../../../img/IconsDirection.svg'
import './unitsTitles.style.scss'

const UnitsTitles = ({ title }: { title: string }) => {
    const info: any = (title === "car" && CarInfo) || DriverInfo;

    const mapItems = (item: string) => {
        if (["Drivers", "Cars"].includes(item)) {
            return (
                <div key={item} className="title-section-button">
                    <div className='title-section-title'><FormattedMessage id={item} /><img src={IconsDirection} alt="alt" /></div>
                    <div className='title-section-title'><FormattedMessage id='delete' /><img src={IconsDirection} alt="alt" /></div>
                </div>
            )
        }
        else {
            return <div key={item} className='title-section-title'><FormattedMessage id={item} /><img src={IconsDirection} alt="alt" /></div>
        }
    }

    const mappedItems = info.map(mapItems)

    return (
        <div className='title-section'>
            {mappedItems}
        </div>
    )
}

export default UnitsTitles;
