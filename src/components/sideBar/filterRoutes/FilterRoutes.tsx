import { Routes, Route } from "react-router-dom";

import Filter from "../../filters/Filters";
import { RoutesInfo } from "../../../constants/routesInfo"
import { useSelector } from "react-redux";
import { isDataUpdatedSelector } from "../../../constants/selectors/selector";

interface RouteProps {
    path: string;
    title: string;
}

const FilterRoutes = () => {
    const isDataUpdated = useSelector(isDataUpdatedSelector);

    const mapItems = ({ path, title }: RouteProps) => {
        return (
            <Route path={path} key={path} element={<Filter title={title} isDataUpdated={isDataUpdated} />} />
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