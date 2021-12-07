import { Routes, Route } from "react-router-dom";

import Filter from "../../filters/Filters";
import { RoutesInfo } from "../../../constants/RoutesInfo"

const FilterRoutes = () => {
    return (
        <Routes>
            {RoutesInfo.map(({ path, title }) =>
                <Route path={path} element={<Filter title={title} />} />
            )}
        </Routes>
    );
};

export default FilterRoutes;