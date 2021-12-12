import { Years } from "../../constants/years";

const YearsSelect = () => {
    return (
        <>
            <option value="" hidden>Select</option>
            {Years.map(item =>
                <option value={item} key={item}>{item}</option>
            )}
        </>
    )
}
export default YearsSelect;