import React from "react";

import icons from "../../../../img/IconsDirection.svg";

const TableSection = (props: any) => {
    const carsSection = ['ID', 'Name', 'Surname', 'Birthday', 'Registration', 'Status'];
    const driverSection = ['ID', 'Driver ID', 'Model', 'Mark', 'Number', 'Year', 'Class'];

    const car = props.cars;
    const driver = props.driver;
    const title = props.title;

    const render = (array: any) => {
        return array && array.map((item: any, index: number) => {
            let arg: any = [];
            for (let index in item) {
                if (index === 'date_birth' || index === 'date_created') {
                    arg.push(new Date(item[index]).toLocaleDateString());
                } else {
                    arg.push(item[index]);
                }
            }
            return (
                <div key={index} className="table_section_isActive-cars block">
                    { arg.map((item: any, index: number) => {
                        if (typeof item !== 'object') {
                            return (
                                <p key={index}>{item}</p>
                            );
                        } else {
                            return (
                                <p key={index}>{item.title}</p>
                            );
                        }
                    }) }
                </div>
            )
        })
    };

    return (
        <div className="table_section_isActive">
            <div className="table_section_isActive-cap block">
                { title === 'car' && carsSection.map((item: any, index: number) =>
                    <p key={index}> {item} <img src={icons} alt="alt" /></p>
                ) }
                { title === 'driver' && driverSection.map((item: any, index: number) =>
                    <p key={index}> {item} <img src={icons} alt="alt" /></p>
                ) }
            </div>
            { title === 'driver' ? render(car) : render(driver) }
        </div>
    )
}

export default TableSection;
