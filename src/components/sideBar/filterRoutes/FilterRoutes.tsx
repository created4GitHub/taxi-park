import { Routes, Route } from "react-router-dom";

import Filter from "../../filters/Filters";
import { ROUTESINFO } from "../../../constants/routesInfo"
import { useMemo } from "react";

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

    const mappedItems = useMemo(() => ROUTESINFO.map(mapItems), [ROUTESINFO]);

    return (
        <Routes>
            {mappedItems}
        </Routes>
    );
};

export default FilterRoutes;