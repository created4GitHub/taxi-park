export const Years: number[] = [];
for (let index: number = 2021; index >= 1960; index--) {
    Years.push(index);
}

const YearsOptions = () => {
    return (
        <>
            <option value="" hidden>Select</option>
            {Years.map(item =>
                <option value={item} key={item}>{item}</option>
            )}
        </>
    )
}
export default YearsOptions;