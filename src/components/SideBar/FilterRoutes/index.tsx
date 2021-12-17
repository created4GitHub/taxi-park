import { useMemo } from "react"
import { Routes, Route } from "react-router-dom";

import Filter from "../../Filters";
import { ROUTES_INFO } from "../../../constants/routesInfo"

const uuid = require("react-uuid");

interface RouteProps {
    path: string;
    pageName: string;
}

const FilterRoutes = () => {
    const mapItems = ({ path, pageName }: RouteProps) => {
        return (
            <Route path={path}
                key={uuid()}
                element={<Filter pageName={pageName} />}
            />
        )
    }
    const mappedItems = useMemo(() => ROUTES_INFO.map(mapItems), [ROUTES_INFO]);

    return (
        <Routes>
            {mappedItems}
        </Routes>
    );
};

export default FilterRoutes;
