import './year.style.scss'

const YearSelect = (props: any) => {

    let massYears = [];

    for (let i: number = 2021; i >= 1960; i--) {
        massYears.push(i)
    }

    return (
            <select 
            onChange={props.onChange}
            name={props.name}>
                {massYears.map((item: any, index: number) => {
                    return (
                        <option
                            id={item}
                            key={index}
                        >{item}
                        </option>
                    )
                })}
            </select>
    )
}

export default YearSelect;
