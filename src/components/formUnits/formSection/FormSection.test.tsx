import renderCar from "./FormSection";

test("render cars", () => {
    expect(renderCar(
        {
            id: "id",
            last_name: "last_name",
            first_name: "first_name",
            date_birth: "24.10.10",
            date_created: "24.10.10"
        }
    ))
        .toBe(
            <div className='table_section_isActive-cars block'>
                <p>id</p>
                <p>last_name</p>
                <p>first_name</p>
                <p>24.10.10</p>
                <p>24.10.10</p>
                <p>status.title</p>
            </div>
        )

})