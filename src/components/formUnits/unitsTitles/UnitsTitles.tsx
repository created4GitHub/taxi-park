import './unitsTitles.style.scss'

export default function UnitsTitles({ title }: { title: string }) {
    let info: string[];
    if (title === "driver") {
        info = ["ID", "Name", "Surname", "Born on", "Created on", "Status", "Cars"];
    }
    else {
        info = ["ID", "Model", "Mark", "Number", "Year", "Driver's ID", "Drivers"];
    }

    return (
        <div className='title-section'>
            {info?.map((item: string, index: number) => {
                if (["Drivers", "Cars"].includes(item)) {
                    return (
                        <div key={index} className="title-section-button">
                            <div className='title-section-title'>{item}</div>
                            <div className='title-section-title'>Delete</div>
                        </div>
                    )
                }
                else {
                    return <div key={index} className='title-section-title'>{item}</div>
                }
            })}
        </div>
    )
}