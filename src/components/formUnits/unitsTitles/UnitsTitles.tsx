import { CarInfo, DriverInfo } from "../../../constants/UnitsTitles"

import IconsDirection from '../../../img/IconsDirection.svg'
import './unitsTitles.style.scss'

const UnitsTitles = ({ title }: { title: string }) => {
    const info = (title === "car" && CarInfo) || DriverInfo;

    return (
        <div className='title-section'>
            {info.map(item => {
                if (["Drivers", "Cars"].includes(item)) {
                    return (
                        <div key={item} className="title-section-button">
                            <div className='title-section-title'>{item}  <img src={IconsDirection} alt="alt"/></div>
                            <div className='title-section-title'>Delete  <img src={IconsDirection} alt="alt"/></div>
                        </div>
                    )
                }
                else {
                    return <div key={item} className='title-section-title'>{item}  <img src={IconsDirection} alt="alt"/></div>
                }
            })}
        </div>
    )
}

export default UnitsTitles;
