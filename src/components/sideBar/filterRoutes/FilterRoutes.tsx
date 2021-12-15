import { Routes, Route } from "react-router-dom";

import Filter from "../../filters/Filters";
import { RoutesInfo } from "../../../constants/routesInfo"
import { isDataUpdatedSelector } from "../../../redux/selectors/selector";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

interface RouteProps {
    path: string;
    title: string;
}

const uuid = require("react-uuid");

const FilterRoutes = () => {
    const isFilterValuesUpdatedSelector = useSelector((state: RootState) => state.isFilterValuesUpdated);

    const mapItems = ({ path, title }: RouteProps) => {
        return (
            <Route path={path} key={uuid()} element={<Filter title={title} />} />
        )
    }

    const mappedItems = RoutesInfo.map(mapItems);

    return (
        <Routes>
            {mappedItems}
        </Routes>
    );
};

export default FilterRoutes;