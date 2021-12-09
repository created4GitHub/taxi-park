import { Routes, Route } from "react-router-dom";

import Filter from "../../filters/Filters";
import { RoutesInfo } from "../../../constants/RoutesInfo"
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";

const FilterRoutes = () => {
    const renderForm = useSelector((state: RootState) => state.resetForm);

    return (
        <Routes>
            {RoutesInfo.map(({ path, title }) =>
                <Route path={path} key={path} element={<Filter renderForm={renderForm} title={title} />} />
            )}
        </Routes>
    );
};

export default FilterRoutes;