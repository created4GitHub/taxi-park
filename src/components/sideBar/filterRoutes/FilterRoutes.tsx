import { Routes, Route } from "react-router-dom";
import { useMemo } from "react"

import Filter from "../../filters/Filters";
import { ROUTES_INFO } from "../../../constants/routesInfo"

interface RouteProps {
    path: string;
    title: string;
}

const uuid = require("react-uuid");

const FilterRoutes = () => {
    const mapItems = ({ path, title }: RouteProps) => {
        return (
            <Route path={path} 
                key={uuid()} 
                element={<Filter title={title} />} 
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