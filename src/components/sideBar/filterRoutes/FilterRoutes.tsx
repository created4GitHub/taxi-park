import { Routes, Route } from "react-router-dom";

import Filter from "../../filters/Filters";
import { RoutesInfo } from "../../../constants/routesInfo"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";

const FilterRoutes = () => {
    const isDataUpdated = useSelector((state: RootState) => state.isDataUpdated);

    return (
        <Routes>
            {RoutesInfo.map(({ path, title }) =>
                <Route path={path} key={path} element={<Filter title={title} isDataUpdated={isDataUpdated} />} />
            )}
        </Routes>
    );
};

export default FilterRoutes;