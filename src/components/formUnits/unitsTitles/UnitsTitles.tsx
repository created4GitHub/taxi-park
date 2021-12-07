import { CarInfo, DriverInfo } from "../../../constants/UnitsTitles"

import './unitsTitles.style.scss'

export default function UnitsTitles({ title }: { title: string }) {
    const info = (title === "car" && CarInfo) || DriverInfo;

    return (
        <div className='title-section'>
            {info?.map((item: string) => {
                if (["Drivers", "Cars"].includes(item)) {
                    return (
                        <div key={item} className="title-section-button">
                            <div className='title-section-title'>{item}</div>
                            <div className='title-section-title'>Delete</div>
                        </div>
                    )
                }
                else {
                    return <div key={item} className='title-section-title'>{item}</div>
                }
            })}
        </div>
    )
}