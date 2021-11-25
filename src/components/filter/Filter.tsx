import DriverFilter from "./driverFilter/DriverFilter";
import CarFilter from "./carFilter/CarFilter";

import "./filters.style.scss";

const Filter = (props: any) => {

    return (
        <div className="content__options-filter">
            {props.title === "driver" ? <DriverFilter /> : <CarFilter />}
        </div>
    );
};

export default Filter;
