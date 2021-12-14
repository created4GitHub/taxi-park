import { Routes, Route } from "react-router-dom";

import Filter from "../../filters/Filters";
import { RoutesInfo } from "../../../constants/routesInfo"
import { useSelector } from "react-redux";
import { isDataUpdatedSelector } from "../../../redux/selectors/selector";

interface RouteProps {
    path: string;
    title: string;
}

const FilterRoutes = () => {

    const mapItems = ({ path, title }: RouteProps) => {
        return (
            <Route path={path} key={path} element={<Filter title={title} />} />
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